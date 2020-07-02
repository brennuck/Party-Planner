const db = require("../data/dbConfig.js");

module.exports = {
  getTodoList,
  addTodo,
  editTodo,
  removeTodo,
};

function getTodoList(id) {
  return db("todo_list")
    .join("parties", "parties.id", "=", "todo_list.party_id")
    .select("todo_list.todo as Todo", "todo_list.completed")
    .where({ party_id: id });
}

function addTodo(todo) {
  return db("todo_list").insert(todo, "id");
}

function editTodo(id, changes) {
  return db("todo_list").where({ id }).update(changes);
}

function removeTodo(id) {
  return db("todo_list").where({ id }).del();
}
