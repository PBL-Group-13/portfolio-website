import dotenv from "dotenv";
import { app } from "./app.mjs";

if (process.env.NODE_ENV === "developement") {
  dotenv.config();
}

app.listen(process.env.PORT || 9000);
