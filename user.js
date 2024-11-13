const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    mac_Id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile_no: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    current_address: {
        type: String,
        required: true,
    },
    current_pincode: {
        type: String,
        required: true,
    },
    permanent_address: {
        type: String,
        required: true,
    },
    permanent_pincode: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
