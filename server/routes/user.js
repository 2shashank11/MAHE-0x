const express = require('express');
const { 
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
} = require('../controllers/user');
const {sendOTP, verifyOTP} = require('../controllers/otp');
const { checkForAuthenticationCookie } = require('../middlewares/authentication');

const router = express.Router()

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/logout', (req, res) => {
    return res.clearCookie('token').redirect('/')
})

router.get('/forgot-password', (req, res) => {
    res.render('forgotPassword')
})


router.get('/dashboard', (req, res) => {
    res.render('dashboard', { user: req.user })
})

router.get('/profile', (req, res) => {
    res.render('profile', {user: req.user})
})

router.get('/achievements', getAllUserAchievements)

router.get('/form/conference', (req, res) => {
    res.render('conferenceForm')
})

router.get('/form/fellowship', (req, res) => {
    res.render('fellowshipForm')
})

router.get('/form/grant', (req, res) => {
    res.render('grantForm')
})

router.get('/form/journal', (req, res) => {
    res.render('journalForm')
})

router.get('/form/patent', (req, res) => {
    res.render('patentForm')
})

router.get('/form/publication', (req, res) => {
    res.render('publicationForm')
})

router.post('/login', handleUserLogin)
router.post('/signup', handleUserSignup)
router.post('/forgot-password/send-otp', sendOTP)
router.post('/forgot-password/verify-otp', verifyOTP)
router.post('/reset-password', handlePasswordReset)
router.post('/form/conference', handleUserConferenceForm)
router.post('/form/fellowship', handleUserFellowshipForm)
router.post('/form/grant', handleUserGrantForm)
router.post('/form/journal', handleUserJournalForm)
router.post('/form/patent', handleUserPatentForm)
router.post('/form/publication', handleUserPublicationForm)

module.exports = router