exports.seed = function (knex) {
  return knex("shopping_list").insert([
    { id: 1, party_id: 1, item: "Cake", item_quantity: 1, completed: false },
    { id: 2, party_id: 1, item: "Candles", item_quantity: 21, completed: false },
    { id: 3, party_id: 1, item: "Fireworks", item_quantity: 10, completed: false },
    { id: 4, party_id: 2, item: "Masks", item_quantity: 60, completed: false },
    { id: 5, party_id: 2, item: "Surprise signs", item_quantity: 3, completed: false },
  ]);
};