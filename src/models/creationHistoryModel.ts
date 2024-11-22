import db from "../db";

export type CreationHistory = {
  id?: string;
  userId: string;
  cocktailId: string;
};

export const addCreationHistory = async (creationHistory: CreationHistory) => {
  await db("CREATION_HISTORY").insert(creationHistory);
};

export const refferCreationHistory = async (creationHistory: any) => {
  // await db("CREATION_HISTORY").select("*").where({ cocktailId:  });
};
