<<<<<<< HEAD
import { User } from "../models/index.mjs";
import { Router } from "express";
import { auth as userAuthentication } from "../middleware/index.mjs";
import {
  signUpController,
  signInController,
} from "../controller/auth.controller.mjs";
const router = new Router();

router.post("/signup", signUpController);

router.post("/signin", signInController);

router.get("/testAuth", userAuthentication, (req, res) => {
  console.log(req.body);
  res.send("successful");
});

export { router as UserRouter };
=======
import { Router } from "express";
import { auth as userAuthentication } from "../middleware/index.mjs";
import {
  signUpController,
  signInController,
  allPortfoliosController,
  viewPortfolioController,
  createPortfolioController,
  updatePortfolioController,
  deletePortfolioController,
  individualPortfolioController,
  deleteUserController,
  updateUserController,
} from "../controller/index.mjs";
const router = new Router();

// signup route
router.post("/signup", signUpController);
//signin route
router.post("/signin", signInController);

// get all users route
router.get("/portfolios", allPortfoliosController);

// user portfolio routes
router.get("/me", userAuthentication, viewPortfolioController);
router.post("/me", userAuthentication, createPortfolioController);
router.patch("/me", userAuthentication, updatePortfolioController);
router.delete("/me", userAuthentication, deletePortfolioController);

// user routes
router.patch("/user/me", userAuthentication, updateUserController);
router.delete("/user/me", userAuthentication, deleteUserController);

//public url to share portfolio
router.get("/portfolio/:uid", individualPortfolioController);

export { router as UserRouter };
>>>>>>> origin/burhan
