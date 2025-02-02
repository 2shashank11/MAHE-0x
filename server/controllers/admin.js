const User = require('../models/user');
const Conference = require('../models/conference');
const Fellowship = require('../models/fellowship');
const Grant = require('../models/grant');
const Journal = require('../models/journal');
const Patent = require('../models/patent');
const Book_BookChapter = require('../models/book_bookChapter');


async function getAllAchievements(req, res) {
    const achievements = {
        conference: await Conference.find({}).populate('userId'),
        fellowship: await Fellowship.find({}).populate('userId'),
        grant: await Grant.find({}).populate('userId'),
        journal: await Journal.find({}).populate('userId'),
        patent: await Patent.find({}).populate('userId'),
        book_bookChapter: await Book_BookChapter.find({}).populate('userId'),
    }
    return res.json({ achievements })
}

async function getAllUsers(req, res) {
    const users = await User.find({}).select('_id fullName maheId department designation email phone role profileImageURL')
    return res.json({ users });
}

async function handleEditUser(req, res) {
    const userId = req.params.id;
    if (!userId) return res.status(404).json({ error: 'User not found' });

    const userData = req.body.editedUserData
    // userData.name = { firstName: userData.firstName, middleName: userData.middleName, lastName: userData.lastName }
    delete userData.firstName;
    delete userData.middleName;
    delete userData.lastName;

    const user = await User.findByIdAndUpdate(userId, userData, { new: true });
    return res.json({ user });
}

async function handleDeleteUser(req, res) {
    try {
        const userId = req.params.id;
        console.log(userId)
        if (!userId) return res.status(404).json({ error: 'User not found' });
        const response = await User.findByIdAndDelete(userId);
        deleteUserResponses = await Promise.all([
            Conference.deleteMany({ userId: userId }),
            Fellowship.deleteMany({ userId: userId }),
            Grant.deleteMany({ userId: userId }),
            Journal.deleteMany({ userId: userId }),
            Patent.deleteMany({ userId: userId }),
            Book_BookChapter.deleteMany({ userId: userId }),
        ])
        return res.json({ message: 'User deleted successfully', user: response });
    } catch (error) {
        console.log("Error deleting related data: ", error)
        return res.status(500).json({ error: 'Error deleting related data' });
    }

}

module.exports = {
    getAllAchievements,
    getAllUsers,
    handleEditUser,
    handleDeleteUser,
}