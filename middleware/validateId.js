const validateIdParam = (req, res, next) => {
    const id = req.params.id;

    // make sure the id is an int 
    if (!Number.isInteger(parseInt(id))) {
        return res.status(400).json({ message: 'ID must be an integer' });
    }

    next();
};

module.exports = validateIdParam;
