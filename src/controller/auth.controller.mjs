import asyncHandler from "express-async-handler";
import { User } from "../models/index.mjs";
/**
 * Sign Up Controller
 */
export const signUpController = asyncHandler(async (req, res, next) => {
  try {
    const { email, password, name } = req.body;

    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      res.status(400).send({ errors: [{ message: "User already exits!" }] });
      return;
    }
    const user = await new User({
      email,
      password,
      name,
    });
    const token = await user.generateAuthToken();
    res.type("application/json").send({ user, token });
  } catch (e) {
    next(e);
  }
});

/**
 * Sign In Controller
 */
export const signInController = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    //when send is called ,the arguements are stringified using JSON.stringify()

    res.type("application/json").send({ user, token });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
