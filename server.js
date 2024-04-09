const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8080'
};

// middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended: true}));

//testing api 
app.get('/', (req, res) => {
    res.json({message: 'Hello from api!'});
});

// port
const PORT = process.env.PORT || 8080;

// server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); 
})