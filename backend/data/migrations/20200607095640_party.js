exports.up = function (knex) {
  return knex.schema
    .createTable("parties", (tbl) => {
      tbl.increments();
      tbl.string("name", 256).notNullable().index();
    })
    .createTable("individual_party", (tbl) => {
      tbl.increments();
      tbl
        .integer("party_id")
        .unsigned()
        .references("id")
        .inTable("parties")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.decimal("budget").notNullable();
      tbl.integer("attendance").notNullable();
    })
    .createTable("todo", (tbl) => {
      tbl.increments();
      tbl.text("todo", 256).notNullable();
      tbl
        .integer("todo_id")
        .unsigned()
        .references("id")
        .inTable("individual_party")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("shopping_item", (tbl) => {
      tbl.increments();
      tbl.text("item").notNullable();
      tbl.integer("item_quantity").notNullable();
      tbl
        .integer("shopping_item_id")
        .unsigned()
        .references("id")
        .inTable("individual_party")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("shopping_item")
    .dropTableIfExists("todo")
    .dropTableIfExists("individual_party")
    .dropTableIfExists("parties");
};
