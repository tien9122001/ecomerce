import { Router } from "express";
import accessController from "../../controllers/access.controller";
import {asyncHandler} from "../../auth/checkAuth"

export const routerAccess = Router();


// router for signUp new 
routerAccess.post("/shop/signup", asyncHandler(accessController.signUp))
routerAccess.post("/shop/login", asyncHandler(accessController.login))