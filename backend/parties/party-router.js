const express = require("express");

const Parties = require("./party-model.js");

const router = express.Router();

router.get("/", (req, res) => {
  Parties.getParties()
    .then((parties) => {
      res.json(parties);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get parties" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Parties.getParty(id)
    .then((party) => {
      if (party) {
        res.json(party);
      } else {
        res.status(404).json({ message: "Could not find party with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get party" });
    });
});

router.post("/", (req, res) => {
  const partyData = req.body;

  Parties.add(partyData)
    .then((party) => {
      res.status(201).json(party);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to create new party" });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Parties.editParty(id, changes)
    .then(party => {
      if (!party) {
        res.status(404).json({ message: "Could not find party with given id" })
      } else {
        res.json({ update: party })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Failed to update party" })
    })
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Parties.removeParty(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "Could not find party with given id" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to delete party" });
    });
});

module.exports = router;
