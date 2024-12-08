const express = require("express")
const dotenv = require('dotenv');
const MongoConnection = require("./DbConnection/connection");
const AuthRoutes = require('./route/auth.route.js')

const app = express();
dotenv.config();
app.use(express.json())

app.get("/api", (req, res) => {
    res.json({ message: "API Live" })
})

app.use("/api/auth", AuthRoutes)

app.listen(process.env.express_port, () => {
    MongoConnection();
    console.log("http://localhost:" + process.env.express_port)
})