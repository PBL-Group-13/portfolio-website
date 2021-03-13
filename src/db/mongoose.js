import mongoose from "mongoose";
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
