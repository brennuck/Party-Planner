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
    res.status(404).json({
      error: "please provide an item and party id to be added to the list",
    });
  } else {
    Todos.addTodo(todo)
      .then((id) => {
        res.status(200).json({ message: "successfully added" });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({ error: "could not add todo" });
      });
  }
});

router.put("/:id/todo/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Todos.editTodo(id, changes)
    .then((todo) => {
      if (todo) {
        res.json({ update: todo });
      } else {
        res.status(404).json({ message: "Could not find todo with given id" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Failed to update todo" });
    });
});

router.delete("/:id/todo/:id", (req, res) => {
  const { id } = req.params;

  Todos.removeTodo(id)
    .then((updated) => {
      if (updated) {
        res.json({ removed: updated });
      } else {
        res.status(404).json({ message: "Could not find todo with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete todo" });
    });
});

module.exports = router;
