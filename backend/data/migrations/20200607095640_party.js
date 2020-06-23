exports.up = function (knex) {
  return knex.schema
    .createTable("parties", (tbl) => {
      tbl.increments();
      tbl.string("name", 256).notNullable().index();
      tbl
        .integer("todo_list_id")
        .unsigned()
        .references("id")
        .inTable("todo_list")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("shopping_list_id")
        .unsigned()
        .references("id")
        .inTable("shopping_list")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
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
    .createTable("todo_list", (tbl) => {
      tbl.increments();
      tbl
        .integer("todo_id")
        .unsigned()
        .references("id")
        .inTable("todo")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("shopping_list", (tbl) => {
      tbl.increments();
      tbl
        .integer("shopping_item_id")
        .unsigned()
        .references("id")
        .inTable("shopping_item")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("todo", (tbl) => {
      tbl.increments();
      tbl.text("todo", 256).notNullable();
    })
    .createTable("shopping_item", (tbl) => {
      tbl.increments();
      tbl.text("item").notNullable();
      tbl.integer("item_quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("shopping_item")
    .dropTableIfExists("todo")
    .dropTableIfExists("shopping_list")
    .dropTableIfExists("todo_list")
    .dropTableIfExists("individual_party")
    .dropTableIfExists("parties");
};
