/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  passwordResetToken: String,
  passwordResetExpires: Date,
});

const userModel = mongoose.model('Users',userSchema);

module.exports = userModel;