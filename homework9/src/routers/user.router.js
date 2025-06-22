import { Router } from "express";
import {addUserController, changePasswordController, changeEmailController, deleteUserController, getAdminsController} from "../controllers/user.controller.js"

import { autenticate, isAdmin } from "../middlewares/authorisation.js";

const usersRouter = Router()

usersRouter.post("/register", addUserController)
usersRouter.post("/change-password", autenticate, changePasswordController)
usersRouter.post("/change-email/", autenticate, changeEmailController);
usersRouter.delete("/delete-account/", autenticate, deleteUserController);

usersRouter.get("/admin",autenticate, isAdmin, getAdminsController);
export default usersRouter;