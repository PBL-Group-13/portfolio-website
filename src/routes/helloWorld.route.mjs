import { Router } from "express";
import { helloWorldController } from "../controller/index.mjs";
const route = Router();

route.get("/", helloWorldController);

export { route as helloWorldRoute };
