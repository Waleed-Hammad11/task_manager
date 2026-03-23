import jwt from "jsonwebtoken"
import User from "../models/user.js"
import bcrypt from "bcrypt"
const generateToken = (id)=>{
    return jwt.sign({id},
    process.env.JWT_SECRET,
    {expiresIn: process.env.JWT_EXPIRES_IN || "7d"}
    )
}

export const registerService = async({ name, email, password })=>{
    
    const existingUser =await User.findOne({ email })

    if (existingUser) {
    const error = new Error("email already exists");
    error.statusCode = 400;
    throw error;
    }

    const user = await User.create({ name, email, password });

    const token = generateToken(user._id);

    return {
        token,
        user: {
            _id:   user._id,
            name:  user.name,
            email: user.email
        }
    };
}


export const loginService = async ({ email, password })=>{

    const user = await User.findOne({email})
    if(!user){
        const error = new Error("email already exists");
        error.statusCode = 401;
        throw error
    }
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        const error = new Error("invalid email or password");
        error.statusCode = 401;
        throw error;
    }
    const token = generateToken(user._id);
    return {
        token,
        user: {
            _id:   user._id,
            name:  user.name,
            email: user.email
        }
    };

}