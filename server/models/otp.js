const mongoose = require('mongoose')
const mailSender = require('../services/mailSender')

const otpSchema = new mongoose.Schema({
    email: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 60 * 10 },
}, { timestamps: true })

async function sendVerificationEmail(email, otp) {
    try {
        const mailResponse = await mailSender(
            email,
            "Verifcation Email",
            `<h1>Please confirm your OTP</h1>
            <p>Your OTP is <b>${otp}</b></p>`
        )
        console.log("email sent successfully")
    } catch (error) {
        console.log("Error in sending mail: ", error)
        throw new Error({ msg: "Error in sending mail", error })
    }
}

otpSchema.pre('save', async function (next) {
    console.log("new otp document saved to dataabse");
    if (this.isNew) {
        await sendVerificationEmail(this.email, this.otp)
    }
    next();
});

const OTP = mongoose.model('otp', otpSchema)

module.exports = OTP