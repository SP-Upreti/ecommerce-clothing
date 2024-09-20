import mongoose from "mongoose";
import User from "../schema/user";
const multer = require('multer');

const CreateUser = async (req, res) => {
    const { name, email, phone, password } = req.body;

    try {
        const user = new User({
            name: name,
            email: email,
            phone: phone,
            password: password
        });

        // Save user to the database
        await user.save();

        // Send success response after user is saved
        res.json({ status: 200, message: `User created successfully. user email = ${email}` });
    } catch (ex) {
        console.error("Server Error:", ex);

        // Send error response to the client
        res.status(500).send({ status: 500, message: "Error creating user." });
    }
}

module.exports = CreateUser;