exports.seed = function(knex) {
  return knex('todos').del()
    .then(function () {
      return knex('todos').insert([
        { id: 1, todo: "Buy cake" },
        { id: 2, todo: "Fireworks" }
      ]);
    });
};
