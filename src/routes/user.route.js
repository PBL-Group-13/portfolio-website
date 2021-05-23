import { Router } from "express";
import { auth as userAuthentication } from "../middleware/index.js";
import {
  signUpController,
  signInController,
  deleteUserController,
  updateUserController,
  signOutController,
  whoController,
  userSearchController,
} from "../controller/index.js";
const router = new Router();

// signup route
router.post("/signup", signUpController);
//signin route
router.post("/signin", signInController);
router.post("/signout", signOutController);

router.get("/who", whoController);
// user routes
router.get("/search", userSearchController);
router.patch("/users/:id", userAuthentication, updateUserController);
router.delete("/users/:id", userAuthentication, deleteUserController);

export { router as UserRouter };
