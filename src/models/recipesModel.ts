import db from "../db";

export const refferRecipes = async (reqParams: any) => {
  const query = db("recipes").select("*");

  console.log("reqParams.cocktailId", reqParams.cocktailId);
  // cocktailIdが存在する場合のみwhere条件を追加
  if (reqParams.cocktailId) {
    query.where({ idDrink: reqParams.cocktailId });
  }

  // クエリを実行
  const result = await query;
  return result;
};

type Recipe = {
  idDrink?: string; // 主キー
  strDrink: string; // 必須
  strTags?: string; // 任意
  strCategory?: string; // 任意
  strAlcoholic?: string; // 任意
  strGlass?: string; // 任意
  strInstructions?: string; // 任意、長文用
  strDrinkThumb: string; // 必須
  strCreativeCommonsConfirmed?: string; // 任意
  dateModified?: Date; // 任意、日時型
  ingredients: string[]; // デフォルト値 "[]"
  measures: string[]; // デフォルト値 "[]"
  user_id: number; // 外部キー、必須
};

export const addRecipe = async (recipe: Recipe) => {
  await db("recipes").insert(recipe);
};
