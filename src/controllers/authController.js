import expressAsyncHandler from "express-async-handler";
import { AUTH_MESSAGES } from "../constants/messages.js";
import ApiResponse from "../utils/ApiResponse.js";
import { loginService, registerService } from "../services/authService.js";

export const register = expressAsyncHandler(async (req, res) => {
    const result = await registerService(req.body);
    return res.status(201).json(ApiResponse.success(AUTH_MESSAGES.REGISTER_SUCCESS, result));
});

export const login = expressAsyncHandler(async (req, res) => {
    const result = await loginService(req.body);
    return res.status(200).json(ApiResponse.success(AUTH_MESSAGES.LOGIN_SUCCESS, result));
});
