import express from "express";
import {
  createCreationHistory,
  deleteCreationHistoryController,
  getCreationHistory,
} from "../controllers/creationHistoryController";
import { createViewHistory } from "../controllers/viewHistoryController";
import { getRecipes } from "../controllers/recipesController";
import { createFavorite, deleteFavoriteController, getFavorite } from "../controllers/favoritesController";

const router = express.Router();

router.post("/creation_history", createCreationHistory);
router.get("/creation_history", getCreationHistory);
router.delete("/creation_history", deleteCreationHistoryController);

router.post("/view_history", createViewHistory);

router.get("/recipes", getRecipes);

router.get("/favorites", getFavorite);
router.post("/favorites", createFavorite);
router.delete("favorites", deleteFavoriteController);

export default router;
