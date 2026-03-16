
// import { check, validationResult } from 'express-validator';

// const validatorMiddleware = (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }
//     next();
// };

// export const createTaskValidator = [
//     check('title')
//         .notEmpty().withMessage('title is required')
//         .isLength({ min: 3 }).withMessage('title is too short')
//         .isLength({ max: 100 }).withMessage('title is too long'),
//     validatorMiddleware, 
// ];
import Joi from "joi";

const createTaskSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            'string.empty': 'title is required',
            'any.required': 'title is required',
            'string.min':   'title is too short',
            'string.max':   'title is too long'
        }),

    description: Joi.string()
        .max(500)
        .optional()  
        .messages({
            'string.max': 'description is too long'
        })
});

export default createTaskSchema