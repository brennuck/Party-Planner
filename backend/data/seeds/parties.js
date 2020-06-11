exports.seed = function(knex) {
  return knex('parties').del()
    .then(function () {
      return knex('parties').insert([
        { id: 1, party_name: 'Happy Birthday', todos_id: 1, items_id: 1, budget: 100, attendance: 2 },
        { id: 2, party_name: 'New Years', todos_id: 2, items_id: 2, budget: 10000, attendance: 500 },
      ]);
    });
};
