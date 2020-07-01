exports.seed = function (knex) {
  return knex("todo_list").insert([
    { id: 1, party_id: 1, todo: "Buy cake", completed: false },
    { id: 2, party_id: 1, todo: "Buy fireworks", completed: false },
    { id: 3, party_id: 1, todo: "Plates", completed: false },
    { id: 4, party_id: 2, todo: "Buy everything", completed: false },
    { id: 5, party_id: 2, todo: "Bye bye", completed: false }
  ]);
};