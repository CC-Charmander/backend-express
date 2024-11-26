import { Request, Response } from "express";
import { refferRecipes } from "../models/recipesModel";

export const getRecipes = async (req: Request, res: Response) => {
  console.log("request.query:", req.query);
  const result = await refferRecipes(req.query);
  res.status(200).json(result);
};
