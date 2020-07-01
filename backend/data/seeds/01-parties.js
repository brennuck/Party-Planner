exports.seed = function(knex) {
      return knex('parties').insert([
        { id: 1, name: "Birthday Party", date: "April 8th", budget: 1000, guestCount: 30 },
        { id: 2, name: "Going Away Party", date: "August 13th", budget: 50, guestCount: 60 },
      ]);
};
