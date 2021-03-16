import { Router } from "express";
import { auth as userAuthentication } from "../middleware/index.js";
import {
  getPortfoliosController,
  createPortfolioController,
  updatePortfolioController,
  deletePortfolioController,
  getPortfolioByUserController,
  getPortfolioByIdController,
  getPortfolioBySlugController,
} from "../controller/index.js";
const router = new Router();

// get all users route
router.get("/", getPortfoliosController);

// user portfolio routes
router.get("/me", userAuthentication, getPortfolioByUserController);
router.get("/:slug", getPortfolioBySlugController);
router.get("/id/:portfolioId", getPortfolioByIdController);

router.post("/", userAuthentication, createPortfolioController);
router.patch("/:id", userAuthentication, updatePortfolioController);
router.delete("/:id", userAuthentication, deletePortfolioController);

export { router as PortfolioRouter };
