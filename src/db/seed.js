import fs from "fs";
import path from "path";
import { Portfolio, User } from "../models/index.js";
import { connectDB } from "./mongoose.js";

// console.log(process.env);

const __dirname = process.cwd();
const portfolios = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "/src/db/devData/portfolios.json"),
    "UTF-8",
    (err) => {}
  )
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/src/db/devData/users.json`, "UTF-8", (err) => {
    console.log(err);
  })
);

(async function () {
  try {
    await connectDB();
    console.log(`[SEED] : DATABASE CONNECTED`);
  } catch (error) {
    console.log(`[SEED] : DATABASE ERROR`);
    console.log(error);
  }
})();

const importData = async () => {
  try {
    await User.create(users);
    await Portfolio.create(portfolios);
    console.log("DB import successful!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await Portfolio.deleteMany();
    await User.deleteMany();
    console.log("DB erase successful!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
