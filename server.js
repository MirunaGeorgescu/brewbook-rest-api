// importing dependencies (the express framework and cors middleware)
const express = require('express');
const cors = require('cors');
const productRouter = require('./routes/productRouter');
const reviewRouter = require('./routes/reviewRouter');
const cafeRouter = require('./routes/cafeRouter');
const errorHandler = require('./middleware/ErrorHandler');
const authRouter = require('./routes/authRoutes'); 

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
app.use(errorHandler);

// mount routes
app.use('/api/products', productRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/cafes', cafeRouter);
app.use('/api/auth', authRouter);


// starting the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
