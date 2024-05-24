// importing dependencies (the express framework and cors middleware)
const express = require("express");
const cors = require("cors");

// routers
const productRouter = require("./routes/productRouter");
const reviewRouter = require("./routes/reviewRouter");
const cafeRouter = require("./routes/cafeRouter");
const authRouter = require("./routes/authRoutes");

// error handler
const errorHandler = require("./middleware/ErrorHandler");

// swagger
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// creating an instance of an express app
const app = express();

// setting port
const PORT = process.env.PORT || 8080;

// specifying that cross-origin requests from http://localhost:8080 are allowed
var corsOptions = {
  origin: "http://localhost:8080",
};

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

// mount routes
app.use("/api/products", productRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/cafes", cafeRouter);
app.use("/api/auth", authRouter);

// swagger setup
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Brewbook API",
    version: "1.0.0",
    description: "Brewbook API documentation",
  },
  servers: [
    {
      url: "http://localhost:8080",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to the API docs
};

const swaggerSpec = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
