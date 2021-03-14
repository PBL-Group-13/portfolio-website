import { app } from "./app.mjs";
import { connectDB } from "./db/mongoose.mjs";

const port = process.env.PORT || 9000;

(async function () {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`[server] : server up on port : ${port}`);
    });
  } catch (error) {
    console.log(`[server] : Error`);
  }
})();
