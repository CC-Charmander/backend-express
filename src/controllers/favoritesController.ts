import { Request, Response } from "express";
import { refferRecipes } from "../models/recipesModel";
import {
  addFavorite,
  deleteFavorite,
  FavoriteTable,
  refferFavorite,
  refferFavoriteNum,
} from "../models/favoritesModel";

export const getFavorite = async (req: Request, res: Response) => {
  const userId = req.query.userId as string | undefined;
  const cocktailId = req.query.cocktailId as string | undefined;

  if (userId !== undefined && cocktailId !== undefined) {
    let intUserId, intCocktailId;
    try {
      intUserId = parseInt(userId);
      intCocktailId = parseInt(cocktailId);
    } catch (e) {
      res.status(400).end();
      return;
    }

    const result = await refferFavorite(intUserId, intCocktailId);

    if (result.length >= 1) {
      res.status(200).json({ exists: 1 });
    } else if (result.length === 0) {
      res.status(200).json({ exists: 0 });
    }
  } else if (cocktailId !== undefined) {
    //いいね数取得API
    let intCocktailId;
    try {
      intCocktailId = parseInt(cocktailId);
    } catch (e) {
      res.status(400).end();
      return;
    }

    const result = await refferFavoriteNum(intCocktailId);

    res.status(200).json({ favoriteNum: result });
  } else {
    res.status(400).end();
    return;
  }
};

export const createFavorite = async (req: Request, res: Response) => {
  type Body = {
    cocktailId: number;
    userId: number;
  };

  const body: Body = req.body;

  const favo: FavoriteTable = {
    favoUserId: body.userId,
    favoIdDrink: body.cocktailId,
  };

  await addFavorite(favo);
  res.status(200).end();
};

export const deleteFavoriteController = async (req: Request, res: Response) => {
  const userId = req.query.userId as string | undefined;
  const cocktailId = req.query.cocktailId as string | undefined;

  if (userId !== undefined && cocktailId !== undefined) {
    const favo: FavoriteTable = {
      favoIdDrink: parseInt(cocktailId),
      favoUserId: parseInt(userId),
    };
    await deleteFavorite(favo);
    res.status(200).end();
  }
  res.status(400).end();
};
