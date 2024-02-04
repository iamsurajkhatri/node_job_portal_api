import mongoose, { Schema, Types } from "mongoose";
const jobsSchema = new Schema(
  {
    company: {
      type: String,
      required: [true, "Company Name is requied"],
    },
    position: {
      type: String,
      required: [true, "Jon Positioin is required"],
    },
    status: {
      type: String,
      enum: ["peding", "reject", "interview"],
      default: "pending",
    },
    workType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "contract"],
      default: "full-time",
    },
    workLocation: {
      type: String,
      default: "Mumbai",
      required: [true, "Work location is required"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Jobs", jobsSchema);
