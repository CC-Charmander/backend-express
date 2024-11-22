import { Request, Response } from "express";
import { addCreationHistory, deleteCreationHistory, refferCreationHistory } from "../models/creationHistoryModel";

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
  const result = await refferCreationHistory(req.query);
  // DBにトランザクション
  res.status(200).json({ exists: result.length });
};

export const deleteCreationHistoryController = async (req: Request, res: Response) => {
  const result = await deleteCreationHistory(req.query.cocktail_id, req.query.user_id);
  // DBにトランザクション
  res.status(200).end();
};