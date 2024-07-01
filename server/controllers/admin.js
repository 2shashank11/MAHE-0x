const User = require('../models/user');
const Conference = require('../models/conference');
const Fellowship = require('../models/fellowship');
const Grant = require('../models/grant');
const Journal = require('../models/journal');
const Patent = require('../models/patent');
const Publication = require('../models/publication');


async function getAllAchievements(req, res) {
    const achievements = {
        conference: await Conference.find({}).populate('userId'),
        fellowship: await Fellowship.find({}).populate('userId'),
        grant: await Grant.find({}).populate('userId'),
        journal: await Journal.find({}).populate('userId'),
        patent: await Patent.find({}).populate('userId'),
        publication: await Publication.find({}).populate('userId'),
    }
    return res.json({achievements})
}

async function getAllUsers(req,res){
    const users = await User.find({})
    return res.json({users});
}

module.exports = {
    getAllAchievements,
    getAllUsers,
}