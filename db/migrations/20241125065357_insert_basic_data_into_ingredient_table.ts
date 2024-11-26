import type { Knex } from "knex";
import data from "../json_data/ingredients_jp_unique.json";

export async function up(knex: Knex): Promise<void> {
  const insertedData = data.map((d: string) => ({ name: d }));
  await knex("ingredient").insert(insertedData).onConflict("name").ignore();
}

export async function down(knex: Knex): Promise<void> {
  await knex("ingredient").delete();
}
