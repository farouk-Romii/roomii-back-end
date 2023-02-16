/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("messages", table => {
        table.increments("id").primary();
        table.integer("sender_id");
        table.integer("receiver_id");
        table.string("text");
        table.foreign("sender_id").references("id").inTable("users");
        table.foreign("receiver_id").references("id").inTable("users");
        
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("messages")
};
