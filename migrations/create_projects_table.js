/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
    return knex.schema.createTable('projects', (table) => {
      table.increments('id').primary();
      table.string('project_title').notNullable();
      table.text('description').notNullable();
      table.text('tech_stack').notNullable();
      table.string('image').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
  };
  
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function (knex) {
    return knex.schema.dropTable('projects');
  };
  