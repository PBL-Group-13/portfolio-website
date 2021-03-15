import asyncHandler from "express-async-handler";
import { Portfolio } from "../models/index.mjs";

export const allPortfoliosController = asyncHandler(async (req, res, next) => {
  try {
    const portfolios = await Portfolio.find();
    if (!portfolios) {
      res
        .status(400)
        .type("application/json")
        .send({ error: "No Existing Profiles!" });
      return;
    }
    res.type("application/json").send({ portfolios });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});

export const viewPortfolioController = asyncHandler(async (req, res) => {
  try {
    const portfolio = Portfolio.findOne({ user: req.user });
    if (!portfolios) {
      res
        .status(404)
        .type("application/json")
        .send({ error: "No Existing Profile!" });
      return;
    }
    res.type("application/json").send({ portfolio });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
export const createPortfolioController = asyncHandler(async (req, res) => {
  try {
    const portfolioConfig = {
      user: req.user,
      socialLinks: req.body.socialLinks,
      about: req.body.about,
      skills: req.body.skills,
      education: req.body.education,
      experience: req.body.experience,
      projects: req.body.projects,
    };
    const portfolio = await new Portfolio(portfolioConfig);
    portfolioConfig.save();
    res
      .type("application/json")
      .send({ message: "Created Successfully", portfolio });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
export const updatePortfolioController = asyncHandler(async (req, res) => {
  try {
    const updates = Object.keys(req.body);

    const allowedUpdates = [
      "socialLinks",
      "about",
      "skills",
      "education",
      "experience",
      "projects",
    ];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
      return res.status(400).send({ error: "Invalid Updates" });
    }
    const portfolio = await Portfolio.findOne({ user: req.user });
    if (!portfolio) {
      res
        .type("application/json")
        .status(404)
        .send({ errors: [{ message: "User does'nt have a portfolio!" }] });
      return;
    }
    updates.forEach(
      (updateField) => (portfolio[updateField] = req.body[updateField])
    );
    await portfolio.save();
    res
      .type("application/json")
      .send({ message: "Updated Successfully !", portfolio });
    return;
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
export const deletePortfolioController = asyncHandler(async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user });
    if (!portfolio) {
      res
        .status(404)
        .type("application/json")
        .send({ error: "No Existing Profile!" });
      return;
    }
    const deleteObj = await portfolio.remove();
    res
      .type("application/json")
      .send({ message: "Deleted Successfully", deleteObj });
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
export const individualPortfolioController = asyncHandler(async (req, res) => {
  try {
    //questionable
  } catch (e) {
    res
      .type("application/json")
      .status(500)
      .send({ errors: [{ message: "Something went wrong!" }] });
  }
});
