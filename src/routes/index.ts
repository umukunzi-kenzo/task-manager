import express from "express";
import { getWelcomeMessage } from "../controllers/welcome.controller";

const router = express.Router();

router.get("/", getWelcomeMessage);

export default router;