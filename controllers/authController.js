const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const Users = db.users;

const login = async (req, res, next) => {
  try {
    // find the user in the database by username
    const user = await Users.findOne({ where: { username: req.body.username } });

    if (!user) {
      throw new Error("User not found!");
    }

    // compare the hashed password with the user's one
    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (passwordMatch) {
      res.status(200).send("Success!");
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
    };

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
