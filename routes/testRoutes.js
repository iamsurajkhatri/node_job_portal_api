import express  from "express";
import { testConrollter } from "../controllers/testController.js";

//router object
const router = express.Router();
//routes
router.get('/test', testConrollter)

export default router;