import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { errorHandler } from "./middleware/errorHandler.js";
import { PortfolioRouter, UploadRouter, UserRouter } from "./routes/index.js";

const app = express();

app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/api/", UserRouter);
app.use("/api/", UploadRouter);
app.use("/api/portfolios", PortfolioRouter);

app.use(errorHandler);

export { app };
