const User = require("../models/user")
const Conference = require("../models/conference")
const Fellowship = require("../models/fellowship")
const Grant = require("../models/grant")
const Journal = require("../models/journal")
const Patent = require("../models/patent")
const Publication = require("../models/publication")


async function handleUserSignin(req, res) {
    const { email, password } = req.body.formData
    console.log(req.body.formData)

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        return res.status(200).cookie("token", token, { httpOnly: false, secure: false, sameSite: 'Strict', }).json({message: 'Login Successful'});
    }
    catch (error) {
        return res.status(404).json({error: error.message})
    }
}

async function handleUserSignup(req, res) {
    try {
        if (req.body.formData.password !== req.body.formData.confirmPassword) {
            throw new Error('Passwords do not match')
        }

        const userExists= await User.findOne({ email: req.body.formData.email })
        if(userExists){
            console.log("User exists")
            throw new Error('User already exists')
        }

        const user = req.body.formData
        if(!user.middleName) user.middleName = ""
        if(!user.lastName) user.lastName = ""
        user.name = { firstName: user.firstName, middleName: user.middleName, lastName: user.lastName }
        
        delete user.firstName
        delete user.middleName
        delete user.lastName
        delete user.confirmPassword
        
        console.log("user: ", user)
        await User.create(user)
        res.status(201).json({ msg: 'User Created Successfully' })
    } catch (error) {
        res.status(400).json(error.message)
    }
}

async function handlePasswordReset(req, res) {
    const email = req.body.email
    const newPassword = req.body.newPassword
    const confirmPassword = req.body.confirmPassword
    if(newPassword !== confirmPassword){
        return res.status(404).json({ error: "Passwords do not match" })
    }
    try {
        const msg = await User.updatePassword(email, newPassword)
        console.log("password updated: ", msg)
    } catch (error) {
        return res.status(404).json({ error: error })
    }
    return res.status(200).json({ message: "Password Reset Successful" })
}

async function getAllAchievements(req, res) {

    const conference = await Conference.find({ }).populate('userId', 'name maheId').select('conferenceName paperTitle region indexed period')
    const fellowship = await Fellowship.find({ }).populate('userId', 'name maheId').select('fellowshipName submitted granted period')
    const grant = await Grant.find({ }).populate('userId', 'name maheId').select('grantName submitted granted amount period')
    const journal = await Journal.find({ }).populate('userId', 'name maheId').select('title journalName quartile wos authorship period')
    const patent = await Patent.find({ }).populate('userId', 'name maheId').select('filed published granted region country period')
    const publication = await Publication.find({ }).populate('userId', 'name maheId').select('bookName type isbn publishYear period')

    const achievements = {
        conference,
        fellowship,
        grant,
        journal,
        patent,
        publication
    }
    return res.json({achievements})
}

module.exports = {
    handleUserSignin,
    handleUserSignup,
    handlePasswordReset,
    getAllAchievements
}