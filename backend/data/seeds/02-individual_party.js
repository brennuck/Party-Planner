exports.seed = function (knex) {
  return knex("individual_party").insert([
    { id: 1, party_id: 1, budget: 1000, attendance: 30 },
    { id: 2, party_id: 2, budget: 50, attendance: 60 },
  ]);
};