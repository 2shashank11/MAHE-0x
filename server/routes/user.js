const express = require('express');
const { 
    getUserAchievements,
    handleUserConferenceForm,
    handleUserFellowshipForm,
    handleUserGrantForm,
    handleUserJournalForm,
    handleUserPatentForm,
    handleUserPublicationForm
} = require('../controllers/user');


const router = express.Router()


router.get('/dashboard', (req, res) => {
    res.render('dashboard', { user: req.user })
})

router.get('/profile', (req, res) => {
    res.render('profile', {user: req.user})
})

router.get('/my-achievements', getUserAchievements)

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


router.post('/form/conference', handleUserConferenceForm)
router.post('/form/fellowship', handleUserFellowshipForm)
router.post('/form/grant', handleUserGrantForm)
router.post('/form/journal', handleUserJournalForm)
router.post('/form/patent', handleUserPatentForm)
router.post('/form/publication', handleUserPublicationForm)

module.exports = router