const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String, // Assuming String is the type you want here
    password: String
});

module.exports = mongoose.model('User', UserSchema);
