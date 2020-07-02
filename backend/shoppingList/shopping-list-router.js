const express = require("express");

const Items = require('./shopping-list-model.js');

const router = express.Router();

router.get("/:id/item", (req, res) => {
  const { id } = req.params;

  Items.getShoppingList(id)
    .then((items) => {
      if (items.length) {
        res.json(items);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a todo for the given party" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get items" });
    });
});

router.post("/shopping-list", (req, res) => {
  const item = req.body;
  const id = req.params.id;
  console.log(item);

  if (!item) {
    res.status(404).json({
      error: "please provide an item and party id to be added to the list",
    });
  } else {
    Items.addItem(item)
      .then((id) => {
        res.status(200).json({ message: "successfully added" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "could not add item" });
      });
  }
});

router.put("/:id/shopping-list/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Items.editItem(id, changes)
    .then((item) => {
      if (item) {
        res.json({ update: item });
      } else {
        res.status(404).json({ message: "Could not find item with given id" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to update item" });
    });
});

router.delete("/:id/shopping-list/:id", (req, res) => {
  const { id } = req.params;

  Items.removeItem(id)
    .then((updated) => {
      if (updated) {
        res.json({ removed: updated });
      } else {
        res.status(404).json({ message: "Could not find item with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete item" });
    });
});

module.exports = router;
