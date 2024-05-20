const authorizeRole = (roles) => {
    return (req, res, next) => {
        console.log("User role:", req.user.role);
        
        if (!roles.includes(req.user.role)) {
            res.status(403); 
            return res.send("Not allowed");
        }
        next();
    };
};

module.exports = authorizeRole;
