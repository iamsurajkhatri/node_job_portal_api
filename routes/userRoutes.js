import express from "express";
import userAuth from "../middlewares/authMiddleware";
import { updateUser } from "../controllers/userController";
const router = express.Router();

router.put("/update-user", userAuth, updateUser);

export default router;
