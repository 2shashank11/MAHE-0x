const express = require('express');

const { getAllAchievements, getAllUsers, handleEditUser, handleDeleteUser } = require('../controllers/admin');

const router = express.Router()

// router.get('/', (req, res) => {
//     return res.json({ user: req.user })
// })

// router.get('/dashboard', (req, res) => {
//     res.render('dashboard', { user: req.user })
// })

// router.get('/profile', (req, res) => {
//     res.render('profile', { user: req.user })
// })

router.get('/all-achievements', getAllAchievements);

router.get('/all-users', getAllUsers);

router.patch('/edit-user/:id', handleEditUser);

router.delete('/delete-user/:id', handleDeleteUser)

module.exports = router;