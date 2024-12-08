// const User = require("../modals/user.modal.js");

const becrypt = require('bcryptjs');
const User = require('../modals/user.modal');
// const generateTokenSetCookie = require("../utils/generateToken");


const Register = async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    try {
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password and Confirm Password does not match" });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(200).json({ success: false, message: "User with this email already exists" });
        }


        const salt = await becrypt.genSalt(10);
        const hashedPassword = await becrypt.hash(password, salt);

        const newUser = new User(
            {
                email: email,
                password: hashedPassword,
            }

        )
        // generateTokenSetCookie(newUser._id, res);
        await newUser.save();
        res.status(200).json({ success: true, message: "User Registered Sucessfully" });
    }
    catch (err) {
        console.log("Registration Error ", err.message)
        res.status(500).json({ success: false, message: "Server Error guys" + err.message })
    }
}

const Login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        const passwordMatch = await becrypt.compare(password, user?.password || "");

        if (!user || !passwordMatch) {
            return res.json({ success: false, message: "Invalid user detail" });
        }
        // generateTokenSetCookie(user._id, res);
        res.status(200).json({ success: true, _user: user });
    }
    catch (err) {
        console.log("Login Error ", err.message)
        res.status(500).json({ success: false, message: "Server Error guys " + err.message })
    }
}

const Logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ success: true, message: "Logout sucessfully" })
    }
    catch (err) {
        console.log("Logout Error ", err.message)
        res.status(500).json({ success: false, message: "Server Error guys" + err.message })
    }
}

module.exports = { Login, Register, Logout };