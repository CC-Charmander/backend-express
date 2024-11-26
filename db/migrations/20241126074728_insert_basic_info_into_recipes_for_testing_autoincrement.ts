import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  type Drink = {
    idDrink?: string;
    strDrink: string;
    strTags?: string;
    strCategory?: string;
    strAlcoholic?: string | null;
    strGlass?: string | null;
    strInstructions?: string | null;
    strDrinkThumb: string;
    strCreativeCommonsConfirmed: string;
    dateModified?: string | null;
    ingredients: string;
    measures: string;
    user_id: number;
  };

  const drink: Drink = {
    strDrink: "テスト",
    strDrinkThumb: "テストパス",
    strCreativeCommonsConfirmed: "No",
    ingredients: JSON.stringify(["ジン"]),
    measures: JSON.stringify(["10 oz"]),
    user_id: 1,
  };

  await knex("recipes").insert(drink);
}

export async function down(knex: Knex): Promise<void> {
  await knex("recipes").delete().where({ strDrinkThumb: "テストパス" });
}
