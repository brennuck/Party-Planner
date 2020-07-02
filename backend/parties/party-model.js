const db = require("../data/dbConfig.js");

module.exports = {
  getParties,
  getParty,
  addParty,
  editParty,
  removeParty,
};

function getParties() {
  return db("parties");
}

function getParty(id) {
  return db("parties")
    .where({ id })
}

function addParty(party) {
  return db("parties")
    .insert(party, "id")
    .then(([id]) => {
      return getParty(id);
    });
}

function editParty(id, changes) {
  return db("parties").where({ id }).update(changes);
}

function removeParty(id) {
  return db("parties").where({ id }).del();
}
