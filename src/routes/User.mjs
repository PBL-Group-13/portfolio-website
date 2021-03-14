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
