import jwt from "jsonwebtoken";
import { User } from "../models/User.mjs";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, "LolThisIsNoSecret");
    const user = await User.findOne({
      _id: decoded._id,
    });
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send("Please Authenticate");
  }
};
export { auth };
