"use strict";
import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

import db from "./database/db";

import userRouter from "./routes/userRouter";
import adminRouter from "./routes/adminRouter";

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    console.log("DB connection - success");
});

//? disable x-powered-by
app.disable("x-powered-by");

app.use(cors());
app.use(morgan("dev"));

app.use("/api/v0/users", userRouter);
app.use("/api/v0/admin", adminRouter);

export default app;
