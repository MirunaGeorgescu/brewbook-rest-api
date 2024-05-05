const db = require("../models"); 

const Product = db.products; 
const Review = db.reviews; 

// create a new product 
const createProduct = async (req, res) => {
    let info = {
        name: req.body.name, 
        price: req.body.price, 
        description: req.body.description
    }

    const product = await Product.create(info); 
    res.status(200).send(product); 
}

// get all products from the db
const getAllProducts = async (req, res) =>{
    let products = await Product.findAll(); 
    res.status(200).send(products); 
}

// get one product by id
const getProduct = async (req, res) =>{
    let id = req.params.id; 
    let product = await Product.findOne({where: {id: id}}); 
    res.status(200).send(product); 
}

// update product 
const updateProduct = async (req, res) => {
    let id = req.params.id; 

    const product = await Product.update(req.body, {where: {id: id}}); 

    res.status(200).send(product); 
}


// delete product
const deleteProduct = async(req, res) => {
    let id = req.params.id; 
    await Product.destroy({where: {id: id}});  

    res.status(200).send('The product was successfully deleted!'); 
}

module.exports = {
    createProduct, 
    getAllProducts, 
    getProduct, 
    updateProduct, 
    deleteProduct
}