const express = require('express')

const {
    getAllAchievements,
    handleUserSignin,
    handleUserSignup,
    handlePasswordReset,
} = require('../controllers/guest');
const { sendOTP, verifyOTP } = require('../controllers/otp');

const router = express.Router()

// router.get('/signin', (req, res) => {
//     if(req.cookies.token) return res.redirect('/user/dashboard')
//     res.render('login')
// })

// router.get('/signup', (req, res) => {
//     if(req.cookies.token) return res.redirect('/user/dashboard')
//     res.render('signup')
// })

// router.get('/forgot-password', (req, res) => {
//     res.render('forgotPassword')
// })

router.get('/all-achievements', getAllAchievements)

router.post('/signin', handleUserSignin)

router.post('/logout', (req, res) => {
    res.clearCookie('token', { httpOnly: false, secure: false, sameSite: 'Strict' })
    res.status(200).json({ message: 'Logout Successful' })
})

router.post('/signup', handleUserSignup)

router.post('/forgot-password/send-otp', sendOTP)

router.post('/forgot-password/verify-otp', verifyOTP)

router.post('/reset-password', handlePasswordReset)

module.exports = router