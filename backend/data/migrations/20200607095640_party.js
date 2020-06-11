
exports.up = function(knex) {
  return knex.schema
    .createTable('parties', tbl => {
        tbl.increments();
        tbl.text('party_name', 128)
            .unique()
            .notNullable();
        tbl.integer('todos_id')
            .references('id')
            .inTable('todos')
            .unsigned()
            .notNullable()
        tbl.integer('items_id')
            .references('id')
            .inTable('items')
            .unsigned()
            .notNullable()
        tbl.integer('budget').notNullable();
        tbl.integer('attendance').notNullable();
    })
    .createTable('todos', tbl => {
        tbl.increments();
        tbl.text("todo", 256).unique().notNullable();
    })
    .createTable('items', tbl => {
        tbl.increments();
        tbl.text("item", 256).unique().notNullable()
        tbl.integer("amount").notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('parties')
    .dropTableIfExists('todos')
    .dropTableIfExists('items')
};
