exports.seed = function (knex) {
  return knex("todo").insert([
    { id: 1, todo: "Buy cake", todo_id: 1 },
    { id: 2, todo: "Buy fireworks", todo_id: 1 },
    { id: 3, todo: "Plates", todo_id: 1 },
    { id: 4, todo: "Buy everything", todo_id: 2 },
    { id: 5, todo: "Bye bye", todo_id: 2 }
  ]);
};