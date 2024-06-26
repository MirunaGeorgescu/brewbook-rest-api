const db = require("../models");

const Product = db.products;
const Review = db.reviews;

// create a new product
const createProduct = async (req, res) => {
  // get the product information for the new product from the body
  let newProductInfo = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    cafeId: req.body.cafeId,
  };

  // create a new product in the database
  const product = await Product.create(newProductInfo);

  // 200 = success
  res.status(200).send(product);
};

// get all products from the db
const getAllProducts = async (req, res, next) => {
  try {
    // finding all the products in the db
    let products = await Product.findAll();

    if (!products.length) {
      throw new Error("Products not found!");
    }

    res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

// get one product by id
const getProduct = async (req, res, next) => {
  try {
    // get the product id from the http parameters
    let productId = req.params.id;

    // find the product in the database based on the id
    let product = await Product.findOne({ where: { id: productId } });

    if (!product) {
      throw new Error("Product not found!");
    }

    res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

// update product
const updateProduct = async (req, res) => {
  // get the product id from the http parameters
  let productId = req.params.id;

  // update the product based on the id
  await Product.update(req.body, { where: { id: productId } });

  const product = Product.findOne({ where: { id: productId } });

  res.status(200).send(product);
};

// delete product
const deleteProduct = async (req, res) => {
  // get the product id from the http parameters
  let productId = req.params.id;

  // update the product from the database based on the id
  await Product.destroy({ where: { id: productId } });

  res.status(200).send("The product was successfully deleted!");
};

// connect one to many relation Product and Reviews
const getProductReviews = async (req, res) => {
  let productId = req.params.id;

  const product = await Product.findByPk(productId, {
    include: [
      {
        model: Review,
        as: "reviews",
      },
    ],
  });

  res.status(200).send(product.reviews);
};

// exporting the functions so they can be accessed form the other files
module.exports = {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getProductReviews,
};
