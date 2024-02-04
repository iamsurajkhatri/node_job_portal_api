import exress from "express";
import { registerUser } from "../controllers/userController";
const router = exress.Router();
//routes
//REGISTER || POST
router.post("/register", registerUser);
//LOGIN || POST
router.post("/login", loginUser);
export default router;
