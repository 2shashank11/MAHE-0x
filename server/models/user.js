const mongoose = require('mongoose')
const { createHmac, randomBytes } = require('node:crypto');
const { createTokenForUser, verifyToken } = require('../services/authentication')


const fullNameSchema = mongoose.Schema({
    firstName: { type: String, },
    middleName: { type: String, },
    lastName: { type: String, },
})

const userSchema = mongoose.Schema({
    name: { type: fullNameSchema, required: true, },
    department: { type: String, },
    designation: { type: String, },
    maheId: { type: String, },
    phone: { type: Number, },

    //below for login purposes
    email: { type: String, required: true, unique: true, },
    salt: { type: String },
    password: { type: String, required: true, },
    profileImageURL: { type: String, default: '/images/defaultProfileImage.png', },
    role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
}, { timestamps: true })

userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    const salt = randomBytes(16).toString()
    const hashedPassword = createHmac('sha256', salt).update(user.password).digest('hex')

    this.salt = salt
    this.password = hashedPassword

    next()
})

userSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
    const user = await this.findOne({ email })

    if (!user) throw new Error('User not found')

    const salt = user.salt
    const hashedPassword = user.password
    const providedPassword = createHmac('sha256', salt).update(password).digest('hex')

    if (providedPassword !== hashedPassword) throw new Error('Incorrect email or password! ');

    const token = createTokenForUser(user)
    return token;
})

userSchema.static('updateProfile', async function (userId, formData) {
    const user = await this.findOneAndUpdate({ _id: userId }, formData, { new: true })
    if (!user) throw new Error('User not found')
    const token = createTokenForUser(user)
    return token;
})

userSchema.static('updatePassword', async function (email, password) {
    const user = await this.findOne({ email })
    if (!user) throw new Error('User not found')
        
    user.password = password
    await user.save()
    return { msg: "Password updated successfully", user }
})

userSchema.static('editPassword', async function(userId, originalPassword, newPassword){
    const user = await this.findOne({_id: userId})
    if(!user) throw new Error('User not found')
    
    const salt = user.salt
    const hashedPassword = user.password
    const providedPassword = createHmac('sha256', salt).update(originalPassword).digest('hex')

    if (providedPassword !== hashedPassword) throw new Error('Wrong Password!');

    else{
        user.password = newPassword
        await user.save()
        return { msg: "Password updated successfully", user }
    }

})

const User = mongoose.model('user', userSchema)

module.exports = User