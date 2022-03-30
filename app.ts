import express from "express";
import apiRoute from "./routes/index";


//create express app
const app = express();
app.use("/api", apiRoute)
export default app;