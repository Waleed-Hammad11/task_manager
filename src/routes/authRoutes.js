import express from "express"
import { loginValidator, registerValidator } from "../utils/validators/authValidator.js";
import { login, register } from "../controllers/authController.js";

const router = express.Router()


router.post("/register", registerValidator, register);


router.post("/login",    loginValidator,    login);

export default router