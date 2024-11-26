import type { Knex } from "knex";
import fs from "fs";
import path from "path";

type Drink = {
  idDrink: string;
  strDrink: string;
  strTags?: string | null;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strCreativeCommonsConfirmed: string;
  dateModified: string | null;
  ingredients: string[];
  measures: string[];
  user_id: string[];
};

export async function up(knex: Knex): Promise<void> {
  // テーブルの全データを削除
  await knex("recipes").del();

  // JSONデータを明示的にUTF-8で読み込み
  const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../json_data/cocktails_jp.json"), "utf8"));

  // JSONデータをもとに挿入データを生成
  const insertedData = (data as Drink[]).map((drink) => ({
    idDrink: drink.idDrink,
    strDrink: drink.strDrink,
    strTags: drink.strTags,
    strCategory: drink.strCategory,
    strAlcoholic: drink.strAlcoholic,
    strGlass: drink.strGlass,
    strInstructions: drink.strInstructions,
    strDrinkThumb: drink.strDrinkThumb,
    strCreativeCommonsConfirmed: drink.strCreativeCommonsConfirmed,
    dateModified: drink.dateModified,
    ingredients: JSON.stringify(drink.ingredients),
    measures: JSON.stringify(drink.measures),
    user_id: drink.user_id,
  }));

  // データを挿入
  await knex("recipes").insert(insertedData);
}

export async function down(knex: Knex): Promise<void> {
  await knex("recipes").del();
}
