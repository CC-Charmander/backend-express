import { Request, Response } from "express";
import { addRecipe, refferRecipes } from "../models/recipesModel";

export const getRecipes = async (req: Request, res: Response) => {
  console.log("request.query:", req.query);
  const result = await refferRecipes(req.query);
  res.status(200).json(result);
};

export const createRecipe = async (req: Request, res: Response) => {
  type Body = {
    idDrink?: string; // 主キー
    strDrink: string; // 必須
    strTags?: string; // 任意
    strCategory?: string; // 任意
    strAlcoholic?: string; // 任意
    strGlass?: string; // 任意
    strInstructions?: string; // 任意、長文用
    strDrinkThumb: string; // 必須
    strCreativeCommonsConfirmed?: string; // 任意
    dateModified?: Date; // 任意、日時型
    ingredients: string[]; // デフォルト値 "[]"
    measures: string[]; // デフォルト値 "[]"
    user_id: number; // 外部キー、必須
  };

  const body: Body = req.body;
  body.dateModified = new Date();
  body.strCreativeCommonsConfirmed = "No";

  await addRecipe(body);
  res.status(200).json();
};
