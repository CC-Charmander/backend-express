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
