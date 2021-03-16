import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("[server] : Database Connected");
  } catch (error) {
    console.log("[server] : Database Connection Failed");
    console.log("[Error] : ", error);
  }
};

export { connectDB };
