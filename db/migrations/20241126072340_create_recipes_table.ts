import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("recipes", (table) => {
    table.string("idDrink").primary();
    table.string("strDrink").notNullable();
    table.string("strTags");
    table.string("strCategory");
    table.string("strAlcoholic");
    table.string("strGlass");
    table.text("strInstructions");
    table.string("strDrinkThumb");
    table.string("strCreativeCommonsConfirmed");
    table.timestamp("dateModified");
    table.jsonb("ingredients").defaultTo("[]");
    table.jsonb("measures").defaultTo("[]");

    // 外部キーuser_idを追加
    table.integer("user_id").unsigned(); // user_idを追加
    table.foreign("user_id").references("user_id").inTable("user"); // 外部キー制約を設定
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("recipes");
}
