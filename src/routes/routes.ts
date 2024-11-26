import express from "express";
import {
  createCreationHistory,
  deleteCreationHistoryController,
  getCreationHistory,
} from "../controllers/creationHistoryController";
import { createViewHistory } from "../controllers/viewHistoryController";
import { createRecipe, getRecipes } from "../controllers/recipesController";

const router = express.Router();

router.post("/creation_history", createCreationHistory);
router.get("/creation_history", getCreationHistory);
router.delete("/creation_history", deleteCreationHistoryController);

router.post("/view_history", createViewHistory);

router.get("/recipes", getRecipes);

router.post("/recipes", createRecipe);

export default router;
