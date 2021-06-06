import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";
import { errorHandler } from "./middleware/errorHandler.js";
import { PortfolioRouter, UploadRouter, UserRouter } from "./routes/index.js";
import compression from "compression";

const app = express();
const staticPath = path.join(process.cwd(), "client", "build");
app.use(compression());
app.set("trust proxy", 1);
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

app.use("/api/", UserRouter);
app.use("/api/", UploadRouter);
app.use("/api/portfolios", PortfolioRouter);

app.use(express.static(staticPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

app.use(errorHandler);

export { app };
