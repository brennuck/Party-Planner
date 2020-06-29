const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    findTodo,
    findItem,
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

function findItem(id) {
    return db("shopping_item")
        .join("individual_party", "individual_party.id", "=", "shopping_item.shopping_item_id")
        .select(
            "shopping_item.item as Item",
            "shopping_item.item_quantity as Quantity"
        )
        .where({ shopping_item_id: id })
}