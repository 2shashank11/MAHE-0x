const JWT = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

function createTokenForUser(user){
    const payload = {
        _id: user._id,
        name: user.name,
        department: user.department,
        position: user.position,
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