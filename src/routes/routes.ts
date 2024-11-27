import express from "express";
import {
  createCreationHistory,
  deleteCreationHistoryController,
  getCreationHistory,
} from "../controllers/creationHistoryController";
import { createViewHistory } from "../controllers/viewHistoryController";
import { createRecipe, getRecipes } from "../controllers/recipesController";
import { getAllIngredients } from "../controllers/ingredientsController";

const router = express.Router();

router.get("/creation_history", getCreationHistory);
router.post("/creation_history", createCreationHistory);
router.delete("/creation_history", deleteCreationHistoryController);

router.post("/view_history", createViewHistory);

router.get("/recipes", getRecipes);
router.post("/recipes", createRecipe);

router.get("/ingredients", getAllIngredients);

export default router;
