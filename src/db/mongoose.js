import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
console.log(process.env);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Up");
  })
  .catch((e) => {
    console.log("MongoDB connection failed");
    console.log("Error : ", e);
  });
