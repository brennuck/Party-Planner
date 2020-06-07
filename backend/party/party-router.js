const express = require("express");

const Party = require("./party-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const found = await Party.getParties();
    if (found) {
      res.status(200).json(found);
    } else {
      res.status(404).json("No party to display");
    }
  } catch {
    res.status(500).json(500).json("database error");
  }
});


module.exports = router;