// const bcrypt = require('bcrypt'); // Add this line if you use bcrypt for password hashing
const User = require("../schema/user");
const multer = require('multer');
// const upload = multer();

const Authorize = async (req, res) => {
    const { _email, _password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email: _email, password: _password }).exec();

        // Check if user exists
        if (!user) {
            return res.status(404).send({ message: "not found", user });
        }

        res.json({ status: 200, message: "Login success!", userData: { user } });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching user data.");
    }
}

module.exports = Authorize;
