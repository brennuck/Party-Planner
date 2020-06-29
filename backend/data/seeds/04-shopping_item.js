exports.seed = function (knex) {
  return knex("shopping_item").insert([
    { id: 1, item: "Cake", item_quantity: 1, shopping_item_id: 1 },
    { id: 2, item: "Candles", item_quantity: 21, shopping_item_id: 1 },
    { id: 3, item: "Fireworks", item_quantity: 10, shopping_item_id: 1 },
    { id: 4, item: "Masks", item_quantity: 60, shopping_item_id: 2 },
    { id: 5, item: "Surprise signs", item_quantity: 3, shopping_item_id: 2 },
  ]);
};