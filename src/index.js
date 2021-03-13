import dotenv from "dotenv";
import { app } from "./app.mjs";

if (process.env.NODE_ENV === "developement") {
  dotenv.config();
}
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server up on port : ${port}`);
});
