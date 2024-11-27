import { Request, Response } from "express";
import {
  addCreationHistory,
  deleteCreationHistory,
  refferAllCreationHistoryByUserId,
  refferCreationHistory,
} from "../models/creationHistoryModel";

export const createCreationHistory = async (req: Request, res: Response) => {
  type Body = {
    user_id: string;
    cocktail_id: string;
  };

  const body: Body = req.body;

  await addCreationHistory(body);

  // DBにトランザクション
  res.status(200).end();
};

export const getCreationHistory = async (req: Request, res: Response) => {
  //クエリパラメータがある場合は特定の人の

  const cocktailId = req.query.cocktailId as string | undefined;
  const userId = req.query.userId as string | undefined;

  if (cocktailId !== undefined && userId !== undefined) {
    const result = await refferCreationHistory(cocktailId, userId);
    res.status(200).json({ exists: result.length });
  } else if (userId !== undefined) {
    const result = await refferAllCreationHistoryByUserId(userId);
    res.status(200).json({ creationHistories: result });
  }
  // DBにトランザクション
};

export const deleteCreationHistoryController = async (req: Request, res: Response) => {
  const result = await deleteCreationHistory(req.query.cocktail_id, req.query.user_id);
  // DBにトランザクション
  res.status(200).end();
};
