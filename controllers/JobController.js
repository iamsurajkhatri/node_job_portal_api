import jobsModel from "../models/jobsModel";

const createJob = async (req, res, next) => {
  const { company, position } = req.body;
  if (!company || !position) {
    next("All fields are required");
  }
  req.body.createdBy = req.user.userId;
  const job = await jobsModel.create(req.body);
  res.status(201).jsons({ job });
};

const getAllJob = async (req, res, next) => {
  //fetch all jobs created by logged in user
  const allJobs = jobsModel.find({ createdBy: req.user.userId });
  res.status(200).json({ allJobs, totalJob: allJobs.length });
};

const deleteJobById = async (req, res, next) => {
  const { id } = req.params;
  const job = await jobsModel.findOne({ _id: id });
  if (!job) {
    next(`No job found with this id ${id}`);
  }
  if (!req.user.userId == job.createdBy.toString()) {
    next("you are not authorized to delet this job");
    return;
  }
  await job.deleteOne();
  res.status(200).json({ message: "Jobs deleted successfully" });
};

const updateJobById = async (req, res, next) => {
  const { id } = req.params;
  const { company, position } = req.body;
  if (!company || !position) {
    next("fields are required");
  }
  const job = await jobsModel.findOne({ _id: id });
  if (!job) {
    next("not matched job found with this id");
  }
  //only the user who have created the job can update the job

  if (req.user.userId !== job.createdBy.toString()) {
    next("You are not authorized to update this job");
    return;
  }

  const updateJob = await jobsModel.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ updateJob });
};
export { createJob, getAllJob, deleteJobById, updateJobById };
