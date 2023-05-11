const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
          _id:Number,
  name: String,
  size: String,
  price: Number,
  quantity: Number,
  date: {
    type: Date,

    default: `ISO${Date.now()}`,
  },
});
const NotesModel = mongoose.model("Note", UserSchema);
module.exports = { NotesModel };
