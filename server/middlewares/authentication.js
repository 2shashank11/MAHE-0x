const { verifyToken } = require('../services/authentication');

function checkForAuthenticationCookie(cookieName){
    return (req, res, next) => {
        const tokenCookieValue = req.cookies[cookieName];

        if(!tokenCookieValue){
            return next()
        }

        try{
            const userPayload = verifyToken(tokenCookieValue)
            req.user = userPayload
        } catch(error){}

        return next()
    }
}

function restrictToRole(roles=[]){
    return function(req, res, next){
        if(!req.user) return res.redirect('/login')
        
        if(!roles.includes(req.user.role)){
            return res.status(403).send('Unauthorized')
        }
        return next()
    }
}

module.exports = {
    checkForAuthenticationCookie,
    restrictToRole,
}