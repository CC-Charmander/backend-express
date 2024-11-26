import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("user", (table) => {
    table.increments("id").primary();
    table.integer("user_id").notNullable();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();

    table.unique(["user_id"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("user");
}
