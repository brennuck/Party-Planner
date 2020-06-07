const knex = require('knex');
const config = require('../knexfile.js');
const db = require('../data/dbConfig.js');

module.exports = {
    getParties,
    getTodoList,
    getShoppingList
}

function getParties() {
    return db("parties")
}

function getTodoList(id) {
    return db("parties as p")
        .join('todos as t', 'p.todos_id', 't.id')
        .where('p.id', '=', id)
        .select('p.party_name', 't.todo')
}

function getShoppingList(id) {
    return db("parties as p")
        .join('items as i', 'p.items_id', 'i.id')
        .where('p.id', '=', id)
        .select('p.party_name', 'i.item')
}