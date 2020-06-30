exports.seed = function(knex) {
      return knex('parties').insert([
        { id: 1, name: "Birthday Party", budget: 1000, attendance: 30 },
        { id: 2, name: "Going Away Party", budget: 50, attendance: 60 },
      ]);
};
