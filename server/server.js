const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./schema/user.js');
const AddUser = require('./controller/authorize.js');

const multer = require('multer');
const Authorize = require('./controller/authorize.js');
const upload = multer();

const app = express();


const uri = "mongodb://localhost:27017"
const conn = mongoose.connect(uri);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1 > <h1 >Api is Live</h1> </h1>")
})

app.post("/login", upload.any(), Authorize)

app.post("/addUser", upload.any(), AddUser);



app.listen(2500, () => {
    console.log("Server is listening on port 2500");
});
