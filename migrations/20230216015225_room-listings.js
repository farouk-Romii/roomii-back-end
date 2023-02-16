/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return  knex.schema.createTable("room_listings", table => {
        table.increments('id').primary();
        table.string('description');
        table.string('photos');
        table.string('price');
        table.string('location');
        table.integer('user_id');
        table.foreign('user_id').references('id').inTable('users');
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
        return knex.schema.dropTable("room_listings")
};
