const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    // Get the Bearer token from the authorization header
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        console.log('No token found');
        return res.sendStatus(401); // Unauthorized
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log('Token verification failed', err);
            return res.sendStatus(403); // Forbidden
        }

        req.user = user;
        next();
    });
};

module.exports = authenticateUser;
