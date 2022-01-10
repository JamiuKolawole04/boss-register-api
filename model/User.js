const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
        enum: ["male", "female"]
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);