import expressAsyncHandler from "express-async-handler"
import { registerService ,loginService} from "../services/authService.js"

export const register = expressAsyncHandler(async(req,res)=>{
    const result = await registerService(req.body)
    res.status(201).json({
        success: true,
        data:    result
    });
})


export const login = expressAsyncHandler(async (req, res) => {
    const result = await loginService(req.body);
    res.status(200).json({
        success: true,
        data:    result
    });
});