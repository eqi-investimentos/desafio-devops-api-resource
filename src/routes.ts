import express from "express";
import ServerController from "./constroller";

const router = express.Router();
const serverController = new ServerController();
router.get("/", serverController.index);

export default router;
