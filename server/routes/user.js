const express = require('express');
const {
    getUserAchievements,
    handleUserConferenceForm,
    handleUserFellowshipForm,
    handleUserGrantForm,
    handleUserJournalForm,
    handleUserPatentForm,
    handleUserPublicationForm,
    handleEditUserForm,
    handleFormDataDelete,
    handleProfileUpdate,
    handlePasswordUpdate,
} = require('../controllers/user');


const router = express.Router()


// router.get('/dashboard', (req, res) => {
//     res.render('dashboard', { user: req.user })
// })

// router.get('/profile', (req, res) => {
//     res.render('profile', {user: req.user})
// })

// router.get('/form/conference', (req, res) => {
//     res.render('conferenceForm')
// })

// router.get('/form/fellowship', (req, res) => {
//     res.render('fellowshipForm')
// })

// router.get('/form/grant', (req, res) => {
//     res.render('grantForm')
// })

// router.get('/form/journal', (req, res) => {
//     res.render('journalForm')
// })

// router.get('/form/patent', (req, res) => {
//     res.render('patentForm')
// })

// router.get('/form/book_bookChapter', (req, res) => {
//     res.render('publicationForm')
// })

router.get('/user-achievements', getUserAchievements)

router.post('/form/conference', handleUserConferenceForm)
router.post('/form/fellowship', handleUserFellowshipForm)
router.post('/form/grant', handleUserGrantForm)
router.post('/form/journal', handleUserJournalForm)
router.post('/form/patent', handleUserPatentForm)
router.post('/form/book_bookChapter', handleUserPublicationForm)

router.patch('/form/conference/:id', handleUserConferenceForm)
router.patch('/form/fellowship/:id', handleUserFellowshipForm)
router.patch('/form/grant/:id', handleUserGrantForm)
router.patch('/form/journal/:id', handleUserJournalForm)
router.patch('/form/patent/:id', handleUserPatentForm)
router.patch('/form/book_bookChapter/:id', handleUserPublicationForm)


router.delete('/form/:category/:id', handleFormDataDelete)

router.patch('/form/:category/:id', handleEditUserForm)
router.patch('/update-profile/:id', handleProfileUpdate)
router.patch('/update-password/:id', handlePasswordUpdate)

module.exports = router