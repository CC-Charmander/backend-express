import express from "express";
import { createCreationHistory } from "../controllers/creationHistoryController";
import { createViewHistory } from "../controllers/viewHistoryController";

const router = express.Router();

router.post("/creation_history", createCreationHistory);
router.post("/view_history", createViewHistory);

export default router;
