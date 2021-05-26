import mongoose from "mongoose";

const mongoUrl =
  "mongodb+srv://<username>:<password>@nodejsproject.sxa2b.gcp.mongodb.net/portfolio?retryWrites=true&w=majority";

const connectDB = async () => {
  const username = process.env.MONGO_USERNAME;
  const password = process.env.MONGO_PASSWORD;
  try {
    if (!username || !password)
      throw new Error("MONGO_USERNAME or MONGO_PASSWORD is not defined!");
    const dbUrl = mongoUrl
      .replace("<username>", username)
      .replace("<password>", password);
    await mongoose.connect(dbUrl, {
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
