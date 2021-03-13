import { User } from "../models/index.mjs";
import { Router } from "express";
import { auth as userAuthentication } from "../middleware/index.mjs";
const router = new Router();

router.post("/signup", async (req, res) => {
  try {
    const user = await new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.post("/signin", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    //when send is called ,the arguements are stringified using JSON.stringify()
    res.send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/testAuth", userAuthentication, (req, res) => {
  console.log(req.body);
  res.send("successful");
});
export { router as UserRouter };
