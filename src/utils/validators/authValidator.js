import Joi from "joi";
import validate from "../../middlewares/validate.js";

const registerSchema = Joi.object({
    name:Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            "string.empty":"name is required",
            "string.max":"name is too long",
            "string.min":"name is too long",
            "any.required":"name is required"
    }),

    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty":   "email is required",
            "string.email":   "invalid email format",
            "any.required":   "email is required"
    }),

    password: Joi.string()
        .min(8)
        .required()
        .messages({
            "string.empty":   "password is required",
            "string.min":     "password must be at least 8 characters",
            "any.required":   "password is required"
        })

})


const loginSchema = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages({
            "string.empty":   "email is required",
            "string.email":   "invalid email format",
            "any.required":   "email is required"
        }),

    password: Joi.string()
        .required()
        .messages({
            "string.empty":   "password is required",
            "any.required":   "password is required"
        })
});

export const registerValidator = validate(registerSchema) 
export const loginValidator = validate(loginSchema) 