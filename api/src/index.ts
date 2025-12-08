import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import router from "./applications/routes";
import connectDB from "./config/db";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
connectDB();
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running in port  ${PORT}`);
});
