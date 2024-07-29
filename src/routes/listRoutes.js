import express from "express";
const router = express.Router();
import listControllers from "../controllers/listControllers.js";

router.post("/create-list", listControllers.createList);
router.post("/get-list", listControllers.getList);
router.post("/get-all-lists", listControllers.getAllLists);

router.post("/create-task", listControllers.createTask);
router.post("/get-task", listControllers.getTask);
router.post("/get-list-tasks", listControllers.getListTasks);

export default router;
