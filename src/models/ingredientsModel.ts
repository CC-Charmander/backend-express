import db from "../db";

export const refferAllIngredients = async () => {
  const result = await db("ingredient").select("*");
  return result;
};
