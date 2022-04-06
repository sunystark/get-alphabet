const mongoose = require("mongoose");

const AlphabetSchema = new mongoose.Schema({
  alphabet: { type: String },
  value: { type: String },
});

module.exports = mongoose.model("Alphabet", AlphabetSchema);
