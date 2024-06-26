const db = require("../models");

const Cafe = db.cafes;
const Product = db.products;
const Review = db.reviews;

// create a new cafe
const createCafe = async (req, res) => {
  // get the cafe information for the new cafe from the body
  let newCafeInfo = {
    name: req.body.name,
    location: req.body.location,
    description: req.body.description,
  };

  // create a new cafe in the database
  const cafe = await Cafe.create(newCafeInfo);

  // 200 = success
  res.status(200).send(cafe);
};

// get all cafes from the db
const getAllCafes = async (req, res, next) => {
  try {
    // finding all the cafes in the db
    let cafes = await Cafe.findAll();

    if (!cafes.length) {
      throw new Error("No cafes found!");
    }

    res.status(200).send(cafes);
  } catch (error) {
    next(error);
  }
};

// get one cafe by id
const getCafe = async (req, res, next) => {
  try {
    // get the cafe id from the http parameters
    let cafeId = req.params.id;

    // find the cafe in the database based on the id
    let cafe = await Cafe.findOne({ where: { id: cafeId } });

    if (!cafe) {
      throw new Error("Cafe not found!");
    }

    res.status(200).send(cafe);
  } catch (error) {
    next(error);
  }
};

// update cafe
const updateCafe = async (req, res) => {
  // get the cafe id from the http parameters
  let cafeId = req.params.id;

  // update the cafe based on the id
  await Cafe.update(req.body, { where: { id: cafeId } });

  const cafe = Cafe.findOne({ where: { id: cafeId } });

  res.status(200).send(cafe);
};

// delete cafe
const deleteCafe = async (req, res) => {
  // get the cafe id from the http parameters
  let cafeId = req.params.id;

  // update the cafe from the database based on the id
  await Cafe.destroy({ where: { id: cafeId } });

  res.status(200).send("The cafe was successfully deleted!");
};

// find all products associated with the cafe
const getCafeProducts = async (req, res, next) => {
  try {
    // get cafe id from the http parameters
    const cafeId = req.params.id;

    // get the cafe with all the products that are linked to it
    const cafe = await Cafe.findByPk(cafeId, {
      include: [
        {
          model: Product,
          as: "products", // Alias for the associated products
        },
      ],
    });

    if (!cafe) {
      throw new Error("Not found!");
    }

    res.status(200).send(cafe.products);
  } catch (error) {
    return next(error);
  }
};

// exporting the functions so they can be accessed from the other files
module.exports = {
  createCafe,
  getAllCafes,
  getCafe,
  updateCafe,
  deleteCafe,
  getCafeProducts,
};
