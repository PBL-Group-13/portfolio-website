import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { User } from "../models/index.mjs";

/**
 * Auth middleware to authorize users
 */

const auth = asyncHandler(async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, "LolThisIsNoSecret");
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    res.status(401).send("Please Authenticate");
  }
});
export { auth };
