import asyncHandler from "express-async-handler";
import { User } from "../models/index.mjs";
/**
 * Sign Up Controller
 */
export const signUpController = asyncHandler(async (req, res, next) => {
  try {
    const {
      email,
      password,
      firstname,
      lastname,
      birthdate,
      location,
      phoneNumber,
      description,
    } = req.body;

    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      res.status(400).send({ errors: [{ message: "User already exits!" }] });
      return;
    }
    const user = await new User({
      email,
      password,
      firstname,
      lastname,
      birthdate,
      location,
      phoneNumber,
      description,
    });
    const token = await user.generateAuthToken();
    res.status(201).type("application/json").send({ user, token });
  } catch (e) {
    next(e);
  }
});

/**
 * Sign In Controller
 */
export const signInController = asyncHandler(async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    //when send is called ,the arguements are stringified using JSON.stringify()

    res.status(200).type("application/json").send({ user, token });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
