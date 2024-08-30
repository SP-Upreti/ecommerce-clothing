const express = require('express');
const cors = require('cors');
const app = express();

const mongoose = require('mongoose');

const uri = "mongodb://localhost:27017"

// Enable CORS for all routes
app.use(cors());

app.get('/login', (req, res) => {
    res.json({
        email: "test@gmail.com",
        password: "#@test"
    });
});

app.listen(2500, () => {
    console.log("Server is listening on port 2500");
});
