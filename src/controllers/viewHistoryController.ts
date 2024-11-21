import { Request, Response } from "express";
import { addViewHistory } from "../models/viewHistoryController";

export const createViewHistory = async (req: Request, res: Response) => {
  type Body = {
    userId: string;
    cocktailId: string;
  };

  const body: Body = req.body;
  addViewHistory(body);

  res.status(200).end;
};
