const mongoose = require("mongoose");
const LocatinSchema = new mongoose.Schema({
  id: String,
  city: String,
  loc: String,
  state: String
});
const LocModel = mongoose.model("location", LocatinSchema);
module.exports = { LocModel };
