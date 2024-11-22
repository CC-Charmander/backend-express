import express from "express";
import { createCreationHistory } from "../controllers/creationHistoryController";
import { createViewHistory } from "../controllers/viewHistoryController";
import { getCreationHistory } from "../controllers/creationHistoryController";

const router = express.Router();

router.post("/creation_history", createCreationHistory);
router.post("/view_history", createViewHistory);

router.get("/creation_history", getCreationHistory);

export default router;
