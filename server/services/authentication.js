const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

function createTokenForUser(user){
    const payload = {
        _id: user._id,
        fullName: user.fullName,
        department: user.department,
        designation: user.designation,
        maheId: user.maheId,
        phone: user.phone,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    }
    const token = JWT.sign(payload, secret)
    return token
}

function verifyToken(token){
    const payload = JWT.verify(token, secret)
    return payload;
}

module.exports = {
    createTokenForUser,
    verifyToken,
}