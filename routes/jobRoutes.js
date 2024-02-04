import express from "express";
import userAuth from "../middlewares/authMiddleware";
import {
  createJob,
  getAllJob,
  deleteJobById,
  updateJobById,
} from "../controllers/JobController";

//router object
const router = express.Router();
//routes
router.post("/create-job", userAuth, createJob);
//get-job for logged in user
router.post("/get-job", userAuth, getAllJob);
//UPDATE JOB
router.patch("/update-job/:id,", userAuth, updateJobById);
router.delete("/delete-job/:id,", userAuth, deleteJobById);

export default router;
