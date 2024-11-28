import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  type Favorite = {
    id?: number;
    favoUserId: number;
    favoIdDrink: number;
  };

  const favo: Favorite = {
    favoUserId: 1,
    favoIdDrink: 15200,
  };

  await knex("favorites").insert(favo);
}

export async function down(knex: Knex): Promise<void> {
  await knex("favorites").delete();
}
