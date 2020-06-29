exports.seed = function(knex) {
      return knex('parties').insert([
        { id: 1, name: "Birthday Party" },
        { id: 2, name: "Going Away Party" },
      ]);
};
