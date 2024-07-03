const User = require("../models/user")
const Conference = require('../models/conference');
const Fellowship = require('../models/fellowship');
const Grant = require('../models/grant');
const Journal = require('../models/journal');
const Patent = require('../models/patent');
const Publication = require('../models/publication');


async function getUserAchievements(req, res) {
    if(!req.user) return res.render('home')
    const userId = req.user._id

    const conference = await Conference.find({ userId }).populate('userId', 'name maheId').select('conferenceName paperTitle region indexed period')
    const fellowship = await Fellowship.find({ userId }).populate('userId', 'name maheId').select('fellowshipName submitted granted period')
    const grant = await Grant.find({ userId }).populate('userId', 'name maheId').select('grantName submitted granted amount period')
    const journal = await Journal.find({ userId }).populate('userId', 'name maheId').select('title journalName quartile wos authorship period')
    const patent = await Patent.find({ userId }).populate('userId', 'name maheId').select('filed published granted region country period')
    const publication = await Publication.find({ userId }).populate('userId', 'name maheId').select('bookName type isbn publishYear period')

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
    
    const formData = req.body.formData
    const userId = req.user._id
    const period = { month: formData.month, year: formData.year }
    delete formData.month
    delete formData.year
    formData.userId = userId
    formData.period = period
    await Model.create(formData)
    return res.status(200).json({message: "Form submitted successfully"})
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

async function handleFormDataDelete(req, res){
    const id = req.params.id;
    const category = req.params.category;

    try {
        let result;
        switch (category) {
            case "conference":
                result = await Conference.findByIdAndDelete(id);
                break;
            case "fellowship":
                result = await Fellowship.findByIdAndDelete(id);
                break;
            case "grant":
                result = await Grant.findByIdAndDelete(id);
                break;
            case "journal":
                result = await Journal.findByIdAndDelete(id);
                break;
            case "patent":
                result = await Patent.findByIdAndDelete(id);
                break;
            case "publication":
                result = await Publication.findByIdAndDelete(id);
                break;
            default:
                return res.status(400).json({ message: "Invalid category" });
        }

        if (!result) {
            return res.status(404).json({ message: "Data not found" });
        }
        return res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
        console.error("Error deleting data:", error);
        return res.status(500).json({ message: "Server error" });
    }
}


module.exports = {
    getUserAchievements,
    handleUserConferenceForm,
    handleUserFellowshipForm,
    handleUserGrantForm,
    handleUserJournalForm,
    handleUserPatentForm,
    handleUserPublicationForm,
    handleFormDataDelete,
}