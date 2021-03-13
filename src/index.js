import { app } from "./app.mjs";

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server up on port : ${port}`);
});
