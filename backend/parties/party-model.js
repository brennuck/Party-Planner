const db = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
}

function find() {
    return db("parties");
}

function findById(id) {
    return db("parties").where({ id })
}