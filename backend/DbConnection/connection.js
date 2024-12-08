const mongoose = require('mongoose')

const MongoConnection = async () => {
    try {
        await mongoose.connect(process.env.mongo_uri);
        console.log("DB Connection Sucess.")
    }
    catch (err) {
        console.log("error connecting database", err.message)
    }
}

module.exports = MongoConnection