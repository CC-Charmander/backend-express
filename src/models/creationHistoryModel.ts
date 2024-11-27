import db from "../db";

export type CreationHistory = {
  id?: string;
  user_id: string;
  cocktail_id: string;
};

export const addCreationHistory = async (creationHistory: CreationHistory) => {
  await db("creation_history").insert(creationHistory);
};

export const refferCreationHistory = async (cocktailId: string, userId: string) => {
  const result = await db("creation_history").select("*").where({ cocktail_id: cocktailId, user_id: userId });
  return result;
};

export const refferAllCreationHistoryByUserId = async (userId: string) => {
  const result = await db("creation_history").select("*").where({ user_id: userId });
  return result;
};

export const deleteCreationHistory = async (cocktail_id: any, user_id: any) => {
  await db("creation_history").delete().where({ cocktail_id: cocktail_id, user_id: user_id });
};
