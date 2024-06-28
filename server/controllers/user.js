const User = require("../models/user")
const Conference = require('../models/conference');
const Fellowship = require('../models/fellowship');
const Grant = require('../models/grant');
const Journal = require('../models/journal');
const Patent = require('../models/patent');
const Publication = require('../models/publication');

async function handleUserLogin(req, res) {
    const { email, password } = req.body

    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        res.cookie("token", token).redirect('/user/dashboard');
    }
    catch (error) {
        res.status(404).render('login', { error })
    }
}

async function handleUserSignup(req, res) {
    try {
        if (req.body.password !== req.body.confirmPassword) {
            throw new Error('Passwords do not match')
        }

        const userExists= await User.findOne({ email: req.body.email })
        if(userExists){
            throw new Error('User already exists')
        }

        const user = req.body
        user.name = { firstName: user.firstName, middleName: user.middleName, lastName: user.lastName }
        
        delete user.firstName
        delete user.middleName
        delete user.lastName
        delete user.confirmPassword
        
        console.log("user: ", user)
        await User.create(user)
        res.status(201).json({ msg: 'User Created Successfully' })
    } catch (error) {
        res.status(400).render('signup', { error })
    }
}

async function handlePasswordReset(req, res) {
    const email = req.cookies.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    if(password !== confirmPassword){
        return res.status(404).render('resetPassword', { error: "Passwords do not match" })
    }
    try {
        const msg = await User.updatePassword(email, password)
        console.log(msg)
    } catch (error) {
        return res.status(404).render('resetPassword', { error: error })
    }
    return res.clearCookie('email').status(200).redirect('/')
}

async function getAllUserAchievements(req, res) {
    if(!req.user) return res.render('home')
    const userId = req.user._id

    const conference = await Conference.find({ userId }).populate('userId', 'name email maheId')
    const fellowship = await Fellowship.find({ userId }).populate('userId', 'name email maheId')
    const grant = await Grant.find({ userId }).populate('userId', 'name email maheId')
    const journal = await Journal.find({ userId }).populate('userId', 'name email maheId')
    const patent = await Patent.find({ userId }).populate('userId', 'name email maheId')
    const publication = await Publication.find({ userId }).populate('userId', 'name email maheId')

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

async function handleUserForm(req, res, Model){
    
    const formData = req.body
    const userId = req.user._id
    const month = { month: formData.month, year: formData.year }
    delete formData.month
    delete formData.year
    formData.userId = userId
    formData.month = month
    await Model.create(formData)
    return res.redirect(201, '/user/dashboard')
}

async function handleUserConferenceForm(req, res){
    return handleUserForm(req, res, Conference)
}

async function handleUserFellowshipForm(req, res){
    return handleUserForm(req, res, Fellowship)
}

async function handleUserGrantForm(req, res){
    return handleUserForm(req, res, Grant)
}

async function handleUserJournalForm(req, res){
    return handleUserForm(req, res, Journal)
}

async function handleUserPatentForm(req, res){
    return handleUserForm(req, res, Patent)
}

async function handleUserPublicationForm(req, res){
    return handleUserForm(req, res, Publication)
}


module.exports = {
    handleUserLogin,
    handleUserSignup,
    handlePasswordReset,
    getAllUserAchievements,
    handleUserConferenceForm,
    handleUserFellowshipForm,
    handleUserGrantForm,
    handleUserJournalForm,
    handleUserPatentForm,
    handleUserPublicationForm
}