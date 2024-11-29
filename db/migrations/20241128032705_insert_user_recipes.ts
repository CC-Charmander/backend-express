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

  const drinks: Drink[] = [
    {
      strDrink: "ユーザーが投稿したカクテル",
      strDrinkThumb: "テストパス",
      strCreativeCommonsConfirmed: "No",
      ingredients: JSON.stringify(["ジン"]),
      measures: JSON.stringify(["10 oz"]),
      user_id: 4,
    },
    {
      strDrink: "ユーザーが投稿したカクテル2",
      strDrinkThumb: "テストパス",
      strCreativeCommonsConfirmed: "No",
      ingredients: JSON.stringify(["ジン"]),
      measures: JSON.stringify(["10 oz"]),
      user_id: 4,
    },
  ];

  await knex("user").insert({
    first_name: "ryo2",
    last_name: "suzuki",
    email: "sample@email.com",
    password: "sample22",
  });
  await knex("user").insert({
    first_name: "ryo3",
    last_name: "suzuki",
    email: "sample@email.com",
    password: "sample22",
  });
  await knex("user").insert({
    first_name: "ryo4",
    last_name: "suzuki",
    email: "sample@email.com",
    password: "sample22",
  });

  await knex("recipes").insert(drinks);
}

export async function down(knex: Knex): Promise<void> {
  await knex("recipes").delete().where({ strDrink: "ユーザーが投稿したカクテル" });
  await knex("user").delete().where({ password: "sample22" });
}
