const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require('dotenv').config()

const Users = db.users;

const login = async (req, res, next) => {
  try {
    // AUTHENTICATE THE USER
    // find the user in the database by username
    const user = await Users.findOne({ where: { username: req.body.username } });

    if (!user) {
      throw new Error("User not found!");
    }

    // compare the hashed password with the user's one
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (passwordMatch) {
      // if the password is correct 
      const userPayload = { id: user.id, username: user.username, email: user.email }; 
      const accessToken = jwt.sign(userPayload, process.env.ACCESS_TOKEN_SECRET);

      return res.status(200).json({ accessToken: accessToken });

    } else {
      throw new Error("Wrong password!");
    }


  } catch (error) {
    next(error);
  }
};


const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await Users.findAll();

    if (!allUsers.length) {
      throw new Error("No users found!");
    }

    res.status(200).send(allUsers);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res) => {
  try {
    // hash password before saving it to the database
    // bcrypt stores the salt inside the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let newUserInfo = {
      username: req.body.username,
      email: req.body.email,
      // use hashed password
      password: hashedPassword,
      role: req.body.role
    };

    if(!['Admin', 'Editor', 'User'].includes(newUserInfo.role))
      throw new Error("Invalid role"); 
    
    const newUser = await Users.create(newUserInfo);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(500).send("Error:", error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  login,
};
