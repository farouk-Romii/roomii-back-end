/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("favorites", table => {
        table.increments('id').primary();
        table.integer("user_id");
        table.integer("room_listing_id");
        table.foreign('user_id').references('id').inTable('users');
        table.foreign('room_listing_id').references('id').inTable('room_listings');

        
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("favorites")
};
