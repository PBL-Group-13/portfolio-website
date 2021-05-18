import asyncHandler from "express-async-handler";
import { Portfolio, ContactForm, User } from "../models/index.js";

export const getPortfoliosController = asyncHandler(async (req, res, next) => {
  try {
    const portfolios = await Portfolio.find({});
    res.type("application/json").send({ portfolios });
  } catch (e) {
    next(e);
  }
});

export const getPortfolioByIdController = asyncHandler(
  async (req, res, next) => {
    try {
      const portfolio = await Portfolio.findById(
        req.params.portfolioId
      ).populate("user");
      if (!portfolio) {
        res
          .status(404)
          .type("application/json")
          .send({
            status: "error",
            errors: [{ message: "No Existing Profile!" }],
          });
        return;
      }
      res.type("application/json").send({ status: "success", data: portfolio });
    } catch (e) {
      next(e);
    }
  }
);
export const getPortfolioBySlugController = asyncHandler(
  async (req, res, next) => {
    try {
      const portfolio = await Portfolio.findOne({
        slug: req.params.slug,
      }).populate("user");
      if (!portfolio) {
        res
          .status(404)
          .type("application/json")
          .send({
            status: "error",
            errors: [{ message: "No Existing Profile!" }],
          });
        return;
      }
      res.type("application/json").send({ portfolio });
    } catch (e) {
      next(e);
    }
  }
);

export const getPortfolioByUserController = asyncHandler(
  async (req, res, next) => {
    try {
      const portfolio = await Portfolio.findOne({ user: req.user.id });
      console.log(req.params);
      if (!portfolio) {
        res
          .status(404)
          .type("application/json")
          .send({
            status: "error",
            errors: [{ message: "No Existing Profile!" }],
          });
        return;
      }
      res.type("application/json").send({ status: "success", data: portfolio });
    } catch (e) {
      next(e);
    }
  }
);

export const createPortfolioController = asyncHandler(
  async (req, res, next) => {
    try {
      const { socialLinks, about, skills, education, experience, projects } =
        req.body;
      const prevPortfolio = await Portfolio.findOne({ user: req.user.id });
      if (prevPortfolio) {
        res
          .type("application/json")
          .status(400)
          .send({
            status: "error",
            errors: [{ message: "portfolio already exits!" }],
          });
        return;
      }
      const portfolio = (
        await Portfolio.create({
          user: req.user.id,
          socialLinks,
          about,
          skills,
          education,
          experience,
          projects,
          slug: req.user.slug,
        })
      ).populate("user");
      res.type("application/json").send({ status: "success", data: portfolio });
    } catch (e) {
      next(e);
    }
  }
);

export const updatePortfolioController = asyncHandler(
  async (req, res, next) => {
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
        return res
          .status(400)
          .send({ status: "error", errors: [{ message: "Invalid Updates" }] });
      }
      const portfolio = await Portfolio.findById(req.params.id);
      if (!portfolio) {
        res
          .type("application/json")
          .status(404)
          .send({
            status: "error",
            errors: [{ message: "User doesn't have a portfolio!" }],
          });
        return;
      }

      if (String(portfolio.user) !== String(req.user.id)) {
        res
          .type("application/json")
          .status(401)
          .send({ status: "error", errors: [{ message: "Unauthorized" }] });
        return;
      }

      updates.forEach(
        (updateField) => (portfolio[updateField] = req.body[updateField])
      );

      await portfolio.save();

      res.type("application/json").send({ status: "success", data: portfolio });

      return;
    } catch (e) {
      next(e);
    }
  }
);
export const deletePortfolioController = asyncHandler(
  async (req, res, next) => {
    try {
      const portfolio = await Portfolio.findById(req.params.id);
      if (!portfolio) {
        res
          .status(404)
          .type("application/json")
          .send({
            status: "error",
            errors: [{ message: "No Existing Profile!" }],
          });
        return;
      }
      const deleteObj = await portfolio.remove();
      res.type("application/json").send({ status: "success", data: deleteObj });
    } catch (e) {
      next(e);
    }
  }
);

export const submitContactFormController = asyncHandler(
  async (req, res, next) => {
    try {
      const user = await User.findOne({ email: req.body.portfolioEmail });
      if (!user) {
        throw "User doesn't Exit !!";
      }
      const contactFormTest = await ContactForm.findOne({
        email: req.body.email,
        user: user._id,
      });
      if (contactFormTest) {
        throw "Already Contacted";
      }
      const contactForm = await new ContactForm({
        user: user._id,
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
      }).populate("user");
      res
        .type("application/json")
        .send({ status: "success", data: contactForm });
      await contactForm.save();
    } catch (e) {
      next(e);
    }
  }
);

export const getContactRequestsController = asyncHandler(
  async (req, res, next) => {
    try {
      const contactForms = await ContactForm.find({
        user: req.user.id,
      }).populate("user");
      console.log(contactForms);
      res
        .type("application/json")
        .send({ status: "success", data: contactForms });
    } catch (e) {
      next(e);
    }
  }
);
