exports.up = function (knex) {
    return knex.schema
      .createTable("parties", (tbl) => {
        tbl.increments();
        tbl.string("name", 128).notNullable().unique().index();
        tbl.string("date", 128).notNullable()
        tbl.decimal("budget").notNullable();
        tbl.integer("guestCount").notNullable();
      })
      .createTable("todo_list", (tbl) => {
        tbl.increments();
        tbl
          .integer("party_id")
          .unsigned()
          .references("id")
          .inTable("parties")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.text("todo", 128).notNullable();
        tbl.boolean("completed").defaultTo(false);
      })
      .createTable("shopping_list", (tbl) => {
        tbl.increments();
        tbl
          .integer("party_id")
          .unsigned()
          .references("id")
          .inTable("parties")
          .onDelete("CASCADE")
          .onUpdate("CASCADE");
        tbl.text("item").notNullable();
        tbl.integer("item_quantity").notNullable();
        tbl.boolean("completed").defaultTo(false);
      });
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists("shopping_list")
      .dropTableIfExists("todo_list")
      .dropTableIfExists("parties");
  };
  