import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('creation_history', (table) => {
        table.increments('id').primary();
        table.integer('user_id').notNullable();
        table.integer('cocktail_id').notNullable();

        table.unique(['user_id', 'cocktail_id']);
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('creation_history');
}

