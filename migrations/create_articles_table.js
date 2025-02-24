/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('articles', (table) => {
      table.increments('id').primary();
      table.date('date').notNullable();
      table.string('article_title').notNullable();
      table.text('description').notNullable();
      table.string('link').notNullable();
      table.string('image').notNullable();
    });
  };
  
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('articles');
  };
  