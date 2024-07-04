const otpGenerator = require('otp-generator')
const OTP = require('../models/otp')
const User = require('../models/user')

const sendOTP = async (req, res) => {
    try {
        const { email } = req.body
        console.log("email in controller: ", req.body)

        const userExists = await User.findOne({ email })
        if (!userExists) {
            return res.status(404).json({ error: "User not found" })
        }
        let otp = otpGenerator.generate(6, { digits: true, upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false, })
        let result = await OTP.findOne({ otp: otp })
        while (result) {
            otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, alphabets: false })
            result = await OTP.findOne({ otp: otp })
        }
        const optPayload = { email, otp }
        const otpBody = await OTP.create(optPayload)
        res.status(200).json({ success: "OTP sent successfully" })
    } catch (error) {
        console.log(error)
        //needs fix
        return res.status(400).josn({ success: false, msg: "error" })
    }
}

const verifyOTP = async (req, res) => {
    const email = req.body.email
    const otp = req.body.otp
    const userOTP = await OTP.find({ email })
    const latestOTP = userOTP[userOTP.length - 1]
    console.log(latestOTP)

    if(!latestOTP){
        return res.status(404).json({ expired: "OTP has been expired" })
    }

    if (latestOTP?.otp === otp) {
        return res.status(200).json({ success: "OTP verified successfully, you can now reset your password!" })
    }
    return res.status(404).json({ notVerified: "OTP not verified" })
}

module.exports = {
    sendOTP,
    verifyOTP,
}