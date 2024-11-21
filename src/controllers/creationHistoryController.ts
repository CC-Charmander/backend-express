import { Request, Response } from "express";
import { addCreationHistory } from "../models/creationHistoryModel";

export const createCreationHistory = async (req: Request, res: Response) => {
  type Body = {
    userId: string;
    cocktailId: string;
  };

  const body: Body = req.body;

  addCreationHistory(body);

  // DBにトランザクション
  res.status(200).end;
};
