const express = require("express");

const Parties = require("./party-model.js");

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

router.get("/:id/todo", (req, res) => {
  const { id } = req.params;

  Parties.findTodo(id)
    .then((todos) => {
      if (todos.length) {
        res.json(todos);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a todo for given party" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Failed to get todos" });
    });
});

router.get("/:id/item", (req, res) => {
  const { id } = req.params;

  Parties.findItem(id)
    .then((items) => {
      if (items.length) {
        res.json(items);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a item for given party" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get items" });
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

module.exports = router;
