const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    socialId: {
      type: Number,
      required: true,
      max: 10,
      unique: true,
    },
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);