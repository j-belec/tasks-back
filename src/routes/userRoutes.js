import express from "express";
const router = express.Router();
import userControllers from "./../controllers/userControllers.js";

router.get("/", userControllers.user);
router.post("/register", userControllers.register);
router.post("/login", userControllers.login);

export default router;
