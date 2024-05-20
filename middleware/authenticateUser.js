const jwt = require("jsonwebtoken");
const db = require("../models");

const Users = db.users

const authenticateUser = (req, res, next) => {
    // Get the Bearer token from the authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // unauthorized
    if (token == null) {
        return res.sendStatus(401); 
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
        if (err) {
            return res.sendStatus(403); 
        }

        // if the the token is valid, look for the user in the database in order to set the role
        try {
            const dbUser = await Users.findByPk(decoded.id);
            if (!dbUser) {
                console.log('User not found in the database');
                return res.sendStatus(403); 
            }

            // update the user
            const userPayload = { id: dbUser.id, username: dbUser.username, email: dbUser.email, role: dbUser.role };
            
            req.user = userPayload;
            next();
        } catch (error) {
            console.log('Error finding user in the database:', error);
            return res.sendStatus(500);
        }
    });
};

module.exports = authenticateUser;
