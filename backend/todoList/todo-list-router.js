const express = require("express");

const Todos = require("./todo-list-model.js");

const router = express.Router();

router.get("/:id/todo", (req, res) => {
  const { id } = req.params;

  Todos.getTodoList(id)
    .then((todos) => {
      if (todos.length) {
        res.json(todos);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a todo for the given party" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to get todos" });
    });
});

module.exports = router;