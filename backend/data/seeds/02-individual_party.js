exports.seed = function (knex) {
  return knex("individual_party").insert([
    { id: 1, party_id: 1 },
    { id: 2, party_id: 2 },
  ]);
};