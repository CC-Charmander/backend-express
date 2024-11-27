import { Request, Response } from "express";
import { refferAllIngredients } from "../models/ingredientsModel";

export const getAllIngredients = async (req: Request, res: Response) => {
  const result = await refferAllIngredients();
  res.status(200).json(result.map((ingredient) => ingredient.name)); //材料名だけ配列にして返す
};
