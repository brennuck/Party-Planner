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

router.post("/todos", (req, res) => {
  const todo = req.body;
  const id = req.params.id;
  console.log(todo);

  if (!todo) {
    res.status(404).json({ error: "please provide an item and party id to be added to the list" })
  } else {
    Todos.addTodo(todo)
      .then(id => {
        res.status(200).json({ message: "successfully added" })
      })
      .catch(error => {
        console.log(error)
        res.status(500).json({ error: "could not add todo" })
      })
  }
})

module.exports = router;