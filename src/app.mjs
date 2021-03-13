import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { helloWorldRoute } from "./routes/index.mjs";

const app = express();

app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/", helloWorldRoute);

export { app };
