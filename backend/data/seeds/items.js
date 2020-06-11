exports.seed = function(knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { id: 1, item: "Cake", amount: 1 },
        { id: 2, item: "Fireworks", amount: 5000 }
      ]);
    });
};
