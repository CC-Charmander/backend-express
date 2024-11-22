import { Request, Response } from "express";
import { addCreationHistory } from "../models/creationHistoryModel";
import { refferCreationHistory } from "../models/creationHistoryModel";

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

export const getCreationHistory = async (req: Request, res: Response) => {
  console.log(req.query.userId)
  // const result = refferCreationHistory(1);
  // DBにトランザクション
  res.status(200).end();
};