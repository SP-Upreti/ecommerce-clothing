const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }
)

const User = new mongoose.model("users", UserSchema);
module.exports = User