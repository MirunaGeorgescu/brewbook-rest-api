// importing dependencies (the express framework and cors middleware)
const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRouter'); 

// creating an instance of an express app 
const app = express();

// setting port
const PORT = process.env.PORT || 8080;

// specifying that cross-origin requests from http://localhost:8080 are allowed
var corsOptions = {
    origin: 'http://localhost:8080'
};

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// testing api 
app.use('/api/products', productRouter);

// starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
