const express = require("express");

const Parties = require('./party-model.js');

const router = express.Router();

router.get("/", (req, res) => {
  Parties.find()
    .then((parties) => {
      res.json(parties);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get parties" });
    });
});

module.exports = router;