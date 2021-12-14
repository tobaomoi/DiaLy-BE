const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    confirmPassword: {type: String, required: true},
    displayName: {type: String,required: true},
    role: {type: String, default: "user"}
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
