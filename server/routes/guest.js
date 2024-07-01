const express = require('express')

const { 
    handleUserLogin,
    handleUserSignup,
    handlePasswordReset,
} = require('../controllers/user');
const {sendOTP, verifyOTP} = require('../controllers/otp');

const router = express.Router()

router.get('/login', (req, res) => {
    if(req.cookies.token) return res.redirect('/user/dashboard')
    res.render('login')
})

router.get('/signup', (req, res) => {
    if(req.cookies.token) return res.redirect('/user/dashboard')
    res.render('signup')
})

router.get('/logout', (req, res) => {
    return res.clearCookie('token').redirect('/')
})

router.get('/forgot-password', (req, res) => {
    res.render('forgotPassword')
})

router.post('/login', handleUserLogin)

router.post('/signup', handleUserSignup)

router.post('/forgot-password/send-otp', sendOTP)

router.post('/forgot-password/verify-otp', verifyOTP)

router.post('/reset-password', handlePasswordReset)

module.exports = router