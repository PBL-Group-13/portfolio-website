import asyncHandler from "express-async-handler";
import { User } from "../models/index.js";

/**
 * Sign Up Controller
 */
export const signUpController = asyncHandler(async (req, res, next) => {
  try {
    const {
      email,
      password,
      firstName,
      lastName,
      birthDate,
      location,
      phoneNumber,
      description,
      slug,
      avatar,
    } = req.body;
    const isExistingUser = await User.findOne({ email });

    if (isExistingUser) {
      res.status(400).send({
        status: "error",
        errors: [{ message: "User already exist!" }],
      });
      return;
    }
    const user = await User.create({
      email,
      password,
      firstName,
      lastName,
      birthDate,
      location,
      phoneNumber,
      description,
      slug,
      avatar:
        avatar === ""
          ? "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
          : avatar,
    });

    const token = user.generateAuthToken();

    res.cookie("__auth", token);

    res
      .status(201)
      .type("application/json")
      .send({ status: "success", data: { user, token } });
  } catch (e) {
    next(e);
  }
});

/**
 * Sign In Controller
 */
export const signInController = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = user.generateAuthToken();
    //when send is called ,the arguements are stringified using JSON.stringify()
    res.cookie("__auth", token);
    res
      .status(200)
      .type("application/json")
      .send({ status: "success", data: user });
  } catch (e) {
    next(e);
  }
});

export const signOutController = asyncHandler((req, res, next) => {
  res.clearCookie("__auth");
  res.status(200).send({ status: "success" });
});
