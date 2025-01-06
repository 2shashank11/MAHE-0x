const User = require("../models/user")
const Conference = require('../models/conference');
const Fellowship = require('../models/fellowship');
const Grant = require('../models/grant');
const Journal = require('../models/journal');
const Patent = require('../models/patent');
const Book_BookChapter = require('../models/book_bookChapter');


async function getUserAchievements(req, res) {
    // if(!req.user) return res.render('home')
    const userId = req.user._id
    const { category, fromDate, toDate } = req.query

    var result
    switch (category) {
        case "Conference":
            result = await Conference.find({ userId, period: { $gte: fromDate, $lte: toDate } }).select('conferenceName paperTitle region indexed period')
            return res.json({ result })
        case "Fellowship":
            result = await Fellowship.find({ userId, periodFrom: { $gte: fromDate, $lte: toDate } }).select('fellowshipName fellowshipAmount submitted granted periodFrom periodTo')
            return res.json({ result })
        case "Grant":
            result = await Grant.find({ userId, periodFrom: { $gte: fromDate, $lte: toDate } }).select('grantName projectTitle submitted granted amount periodFrom periodTo')
            return res.json({ result })
        case "Journal":
            result = await Journal.find({ userId, period: { $gte: fromDate, $lte: toDate } }).select('title journalName quartile wos authorship doi period')
            return res.json({ result })
        case "Patent":
            result = await Patent.find({ userId, period: { $gte: fromDate, $lte: toDate } }).select('title filed published granted region country period')
            return res.json({ result })
        case "Book_BookChapter":
            result = await Book_BookChapter.find({ userId, period: { $gte: fromDate, $lte: toDate } }).select('bookName type isbn publicationYear period')
            return res.json({ result })
        default:
            return res.status(404).json({ message: "Invalid Category" })
    }
}

const convertToDate = (data) => {
    return new Date(data.year, data.month, data.day).toISOString()
}

async function handleUserForm(req, res, Model, id) {
    try {
        const formData = req.body.formData
        const userId = req.user._id

        if (Model === Fellowship || Model === Grant) {
            formData.periodFrom = convertToDate(formData.periodFrom)
            formData.periodTo = convertToDate(formData.periodTo)
        }
        else {
            formData.period = convertToDate(formData.period)
        }
        formData.userId = userId

        console.log(formData)

        if (id) {
            const result = await Model.findByIdAndUpdate(id, formData)
        }
        else {
            await Model.create(formData)
        }
        return res.status(200).json({ message: "Form submitted successfully" })
    }
    catch (error) {
        console.error("Error submitting form:", error)
        return res.status(500).json({ message: "Server error" })
    }
}

async function handleUserConferenceForm(req, res) {
    const id = req.params.id
    return handleUserForm(req, res, Conference, id)
}

async function handleUserFellowshipForm(req, res) {
    const id = req.params.id
    return handleUserForm(req, res, Fellowship, id)
}

async function handleUserGrantForm(req, res) {
    const id = req.params.id
    return handleUserForm(req, res, Grant, id)
}

async function handleUserJournalForm(req, res) {
    const id = req.params.id
    return handleUserForm(req, res, Journal, id)
}

async function handleUserPatentForm(req, res) {
    const id = req.params.id
    return handleUserForm(req, res, Patent, id)
}

async function handleUserPublicationForm(req, res) {
    const id = req.params.id
    return handleUserForm(req, res, Book_BookChapter, id)
}

async function handleFormDataDelete(req, res) {
    const id = req.params.id;
    const category = req.params.category;
    console.log(id, category)

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
            case "book_bookChapter":
                result = await Book_BookChapter.findByIdAndDelete(id);
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

function handleEditUserForm(req, res) {
    console.log(req)
}

async function handleProfileUpdate(req, res) {
    const userId = req.params.id
    const formData = req.body
    try {
        const token = await User.updateProfile(userId, formData)
        return res.status(200).cookie("token", token, { httpOnly: false, secure: false, sameSite: 'Strict', }).json({ message: 'Profile Update Successful' });

    } catch (error) {
        return res.json({ message: "Something went wrong", error: error })
    }
}

async function handlePasswordUpdate(req, res) {
    const userId = req.params.id

    const originalPassword = req.body.originalPassword
    const newPassword = req.body.newPassword
    const confirmPassword = req.body.confirmPassword

    if (newPassword !== confirmPassword) {
        return res.status(404).json({ error: "Passwords do not match" })
    }

    try {
        const result = await User.editPassword(userId, originalPassword, newPassword)
        return res.status(200).json({ message: "Password updated successfully" })
    } catch (error) {
        return res.status(404).json({ message: "Wrong Password", error: error })
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
    handleEditUserForm,
    handleProfileUpdate,
    handlePasswordUpdate,
}