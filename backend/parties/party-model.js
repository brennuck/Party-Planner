const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findTodo,
}

function find() {
    return db("parties");
}

function findById(id) {
    return db("parties").where({ id })
}

function findTodo(id) {
    return db("todo")
        .join("individual_party", "individual_party.id", "=", "todo.todo_id")
        .select(
            "todo.id as Step",
            "todo.todo as Todo"
        )
        .where({ todo_id: id })
}