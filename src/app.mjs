import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { errorHandler } from "./middleware/errorHandler.mjs";
import { UserRouter } from "./routes/index.mjs";

const app = express();

app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/api/", UserRouter);

app.use(errorHandler);

export { app };
