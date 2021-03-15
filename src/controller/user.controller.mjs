import asyncHandler from "express-async-handler";
import { User, Portfolio } from "../models/index.mjs";

export const updateUserController = asyncHandler(async (req, res) => {
  try {
    const updates = Object.keys(req.body);

    const allowedUpdates = [
      "firstname",
      "lastname",
      "email",
      "birthdate",
      "location",
      "phoneNumber",
      "description",
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid Updates" });
    }
    updates.forEach(
      (updateField) => (req.user[updateField] = req.body[updateField])
    );
    const updateObj = await req.user.save();
    res
      .type("application/json")
      .send({ message: "Updated Successfully", updateObj });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});

export const deleteUserController = asyncHandler(async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user });
    let portfolioDeleteObj = {};
    if (portfolio) {
      portfolioDeleteObj = await req.portfolio.remove();
    }
    const deleteObj = await req.user.remove();
    res
      .type("application/json")
      .send({ message: "Deleted Successfully", deleteObj, portfolioDeleteObj });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
