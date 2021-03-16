import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

/**
 * Auth middleware to authorize users
 */

const auth = asyncHandler(async (req, res, next) => {
  try {
    const extractFromCookie = req.cookies?.__auth;
    const token =
      extractFromCookie || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      throw new Error("token not exist");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      throw new Error();
    }

    req.token = token;

    req.user = user.toJSON();

    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ errors: [{ message: "Please Authenticate" }] });
  }
});
export { auth };
