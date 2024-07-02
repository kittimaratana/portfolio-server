/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('articles', (table) => {
      table.increments('id').primary();
      table.timestamp('date').notNullable();
      table.string('article_title').notNullable();
      table.string('description').notNullable();
      table.string('link').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('articles');
  };
  