import express from "express";
import { createCreationHistory, deleteCreationHistoryController, getCreationHistory } from "../controllers/creationHistoryController";
import { createViewHistory } from "../controllers/viewHistoryController";

const router = express.Router();

router.post("/creation_history", createCreationHistory);
router.post("/view_history", createViewHistory);

router.get("/creation_history", getCreationHistory);

router.delete("/creation_history", deleteCreationHistoryController);

export default router;
