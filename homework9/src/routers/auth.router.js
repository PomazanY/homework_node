import { Router } from "express";
import { loginController } from "../controllers/auth.controller.js";

import { autenticate } from "../middlewares/authorisation.js";

const authRouter = Router();

authRouter.post("/login", autenticate, loginController)

export default authRouter