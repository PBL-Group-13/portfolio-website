import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/pbl", {
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
