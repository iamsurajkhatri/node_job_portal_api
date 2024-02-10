import express from "express";
import userAuth from "../middlewares/authMiddleware";
import {
  createJob,
  getAllJob,
  deleteJobById,
  updateJobById,
  jobStats,
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

router.delete("/delete-job/:id,", userAuth, deleteJobById);
//JOB STATS FILTER || GET

//get logged in user job(which is created by logged in user)
router.get("/job-stats/,", userAuth, jobStats);

export default router;
