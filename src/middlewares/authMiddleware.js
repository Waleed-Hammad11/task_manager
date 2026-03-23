import expressAsyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"


const protect = expressAsyncHandler(async (req , res, next)=>{
    const token = req.headers.authorization?.split(" ")[1]
    if(!token){
        const error = new Error("not authorized, no token");
        error.statusCode = 401;
        throw error;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
        const error = new Error("user no longer exists");
        error.statusCode = 401;
        throw error;
    }
    
    next()
})

export default protect;