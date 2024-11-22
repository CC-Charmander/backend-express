import db from "../db";

export type CreationHistory = {
  id?: string;
  user_id: string;
  cocktail_id: string;
};

export const addCreationHistory = async (creationHistory: CreationHistory) => {
  await db("creation_history").insert(creationHistory);
};

export const refferCreationHistory = async (reqParams: any) => {
  const result = await db("creation_history").select("*").where({ cocktail_id: reqParams.cocktailId, user_id: reqParams.userId });
  return result
};

export const deleteCreationHistory = async (cocktail_id: any, user_id: any) => {
  await db("creation_history").delete().where({ cocktail_id: cocktail_id, user_id: user_id });
};

