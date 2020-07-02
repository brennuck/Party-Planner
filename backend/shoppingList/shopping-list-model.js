const db = require("../data/dbConfig.js");

module.exports = {
    getShoppingList,
    addItem,
    editItem,
    removeItem
}

function getShoppingList(id) {
    return db("shopping_list")
      .join("parties", "parties.id", "=", "shopping_list.party_id")
      .select("shopping_list.id", "shopping_list.item as Item", "shopping_list.item_quantity as Quantity", "shopping_list.completed")
      .where({ party_id: id });
  }
  
  function addItem(item) {
    return db("shopping_list").insert(item, "id");
  }
  
  function editItem(id, changes) {
    return db("shopping_list").where({ id }).update(changes);
  }
  
  function removeItem(id) {
    return db("shopping_list").where({ id }).del();
  }