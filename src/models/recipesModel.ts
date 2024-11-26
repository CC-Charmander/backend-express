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
