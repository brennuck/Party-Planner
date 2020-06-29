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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Parties.findById(id)
    .then(party => {
      if (party) {
        res.json(party)
      } else {
        res.status(404).json({ message: "Could not find party with given id" })
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get party" })
    })
})

module.exports = router;