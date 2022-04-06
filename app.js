require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const Alphabet = require("./model/alphabet");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "https://drag-drop-math.netlify.app",
  })
);

// Get all alphabet
app.get("/alphabet", async (req, res) => {
  try {
    const alphabet = await Alphabet.find();
    res.status(200).json({ alphabet: alphabet });
  } catch (err) {
    console.log(err);
  }
});

// Create alphabet record if needed
app.post("/alphabet", async (req, res) => {
  try {
    const { alphabet, value } = req.body;

    if (!(alphabet && value)) {
      res.status(400).json({ message: "All inputs are required" });
    }

    await Alphabet.create({
      alphabet,
      value,
    });

    res.status(200).json({ message: "Added alphabet" });
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
