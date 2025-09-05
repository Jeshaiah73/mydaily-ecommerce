import dotenv from "dotenv";
import express from "express";
import dbConnect from "../config/dbConnect.js"; 

dotenv.config()
//database connect
dbConnect();
const app = express();

export default app;
