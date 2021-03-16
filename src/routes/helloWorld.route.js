import { Router } from "express";
import { helloWorldController } from "../controller/index.js";
const route = Router();

route.get("/", helloWorldController);

export { route as helloWorldRoute };
