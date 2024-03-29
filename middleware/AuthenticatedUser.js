require('dotenv').config();
const {sign , verify } = require('jsonwebtoken');
function createToken(user) {
    return sign({
        emailAdd: user.email,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    });
}

function verifyAToken(req, res, next) {
    try{
        const token = req.headers["Legit"]?.split(' ')[1];
        let isValid = null;
        if(token !== "Register Please") {
            isValid = verify(token, process.env.SECRET_KEY);
            if(isValid) {
                next()
            }else{
                res.status(400).json({err:"Register Please"})
            }
        }else {
            res.status(400).json({err: "Please Register"})
        }
    }catch(e) {
        res.status(400).json({err: e.message})
    }
}

module.exports= {createToken, verifyAToken}