import express from "express";
import {
  createCreationHistory,
  deleteCreationHistoryController,
  getCreationHistory,
} from "../controllers/creationHistoryController";
import { createViewHistory } from "../controllers/viewHistoryController";

import { createFavorite, deleteFavoriteController, getFavorite } from "../controllers/favoritesController";
import { createRecipe, getRecipes } from "../controllers/recipesController";
import { getAllIngredients } from "../controllers/ingredientsController";

const router = express.Router();

//creation_history
router.get("/creation_history", getCreationHistory);
router.post("/creation_history", createCreationHistory);
router.delete("/creation_history", deleteCreationHistoryController);

//view_history
router.post("/view_history", createViewHistory);

//recipes
router.get("/recipes", getRecipes);
router.post("/recipes", createRecipe);

//ingredients
router.get("/ingredients", getAllIngredients);

router.get("/favorites", getFavorite);
router.post("/favorites", createFavorite);
router.delete("favorites", deleteFavoriteController);

export default router;
