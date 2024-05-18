const db = require("../models");
const jwt = require("jsonwebtoken");


const login = async (req, res) => {
  // authenticate the user
};

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await db.users.findAll();

    if (!allUsers.length) {
      throw new Error("No users found!");
    }

    res.status(200).send(allUsers);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers
}