import express from "express";
import "dotenv/config";
import connectDb from "./config/db.js";
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import cors from "cors";
import margan from "morgan";
import morgan from "morgan";
import errorMiddelware from "./middlewares/errorMiddleware.js";
const app = express();

//mongodb connection
connectDb();

app.get("/", (req, res) => {
  res.send("<h1>WELCOME TO JOB PORTAL APP</h1>");
});
//middlwares

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/vi/jobs", jobRoutes);
//validation middlware
app.use(errorMiddelware);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Node Server Running In ${process.env.DEV_MODE} Mode on At:http://localhost:${PORT}`
  );
});
