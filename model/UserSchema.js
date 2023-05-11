const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: String,
  powers: [{ type: String }],
  health: {
    type: Number,
    min: 0,
    max: 20,
  },
  villains: [
    {
      name: String,
      health: String,
    },
  ],
  metadata: {
    favouriteColor: String,
    age: Number,
  },
});
const UserModel = mongoose.model("Heroes", UserSchema);
module.exports = { UserModel };
