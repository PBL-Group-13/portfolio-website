import asyncHandler from "express-async-handler";
import { User, Portfolio } from "../models/index.js";
import jwt from "jsonwebtoken";

export const updateUserController = asyncHandler(async (req, res, next) => {
  try {
    const allowedUpdates = [
      "firstName",
      "lastName",
      "email",
      "birthDate",
      "location",
      "phoneNumber",
      "description",
      "slug",
    ];

    const user = await User.findById(req.params.id);

    if (!user) {
      res
        .type("application/json")
        .status(404)
        .send({ status: "error", errors: [{ message: "User not found" }] });
      return;
    }

    if (String(user._id) !== String(req.user.id)) {
      res
        .type("application/json")
        .status(401)
        .send({ status: "error", errors: [{ message: "Unauthorized" }] });
      return;
    }

    allowedUpdates.forEach(
      (updateField) =>
        req.body[updateField] && (user[updateField] = req.body[updateField])
    );

    await user.save();

    res.type("application/json").send({ status: "success", data: user });
  } catch (e) {
    next(e);
  }
});

export const deleteUserController = asyncHandler(async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      res
        .type("application/json")
        .status(404)
        .send({ status: "error", errors: [{ message: "User not found" }] });
      return;
    }

    await Portfolio.findOneAndDelete({ user: req.user.id });
    res.type("application/json").send({ status: "error", data: deletedUser });
  } catch (e) {
    next(e);
  }
});

export const whoController = asyncHandler(async (req, res) => {
  try {
    const extractFromCookie = req.cookies?.__auth;
    const token =
      extractFromCookie || req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      res.type("application/json").send({ status: "success", data: null });
      return;
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);

    if (!user) {
      res.type("application/json").send({ status: "success", data: null });
      return;
    }
    res.type("application/json").send({ status: "success", data: user });
  } catch (e) {
    console.log(e);
    res.type("application/json").send({ status: "success", data: null });
  }
});
export const userSearchController = asyncHandler(async (req, res, next) => {
  const { limit = 5, page = 1, q } = req.query;

  const userSearch =
    q?.length > 1
      ? await User.find({
          $or: [
            { firstName: new RegExp(q, "gi") },
            { lastName: new RegExp(q, "gi") },
            { skills: new RegExp(q, "gi") },
          ],
        }).limit(Math.max(1, limit))
      : [];

  res.type("application/json").send({ status: "success", data: userSearch });
});
export const getLatestUsersController = asyncHandler(async (req, res) => {
  const { limit = 21, page = 1 } = req.query;
  const skip = (Math.max(1, page) - 1) * limit;
  const userSearch = await User.find({ portfolio: { $ne: null } })
    .limit(Math.max(1, limit))
    .skip(skip)
    .sort({ createdAt: -1 });

  res.type("application/json").send({ status: "success", data: userSearch });
});
