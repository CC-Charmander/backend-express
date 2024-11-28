import db from "../db";

export type FavoriteTable = {
  id?: number;
  favoUserId: number;
  favoIdDrink: number;
};

export const refferFavorite = async (userId: number, cocktailId: number) => {
  const result = await db("favorites").select("*").where({ favoUserId: userId, favoIdDrink: cocktailId });
  return result;
};

export const addFavorite = async (favorite: FavoriteTable) => {
  await db("favorites").insert(favorite);
};

export const deleteFavorite = async (favorite: FavoriteTable) => {
  await db("favorites").delete().where(favorite);
};

export const refferFavoriteNum = async (cocktailId: number): Promise<number> => {
  const result = await db("favorites").count("favoIdDrink as count").where({ favoIdDrink: cocktailId }).first(); // 最初の行を取得

  // 結果を数値として返す
  return parseInt(result?.count as string);
};
