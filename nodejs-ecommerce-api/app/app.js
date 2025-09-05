import dotenv from "dotenv";
import express from "express";
import dbConnect from "../config/dbConnect.js"; 
import { globalErrHandler, notFound } from "../middlewares/globalErrHandler.js";
import userRoutes from "../routes/usersRoute.js";

dotenv.config()

//database connect
dbConnect();
const app = express();

//pass incoming data
app.use(express.json());

//routes
app.use('/', userRoutes);

//error handler middleware <- must be the last middleware
app.use(notFound);
app.use(globalErrHandler);
export default app;
