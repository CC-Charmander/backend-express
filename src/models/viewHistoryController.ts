import db from "../db";

export type ViewHistory = {
  id?: string;
  userId: string;
  cocktailId: string;
  viewedAt?: string;
};

export const addViewHistory = async (creationHistory: ViewHistory) => {
  await db("VIEW_HISTORY").insert(creationHistory);
};
