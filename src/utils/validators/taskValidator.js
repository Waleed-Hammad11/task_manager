import { check, validationResult } from 'express-validator';

const validatorMiddleware = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export const createTaskValidator = [
    check('title')
        .notEmpty().withMessage('title is required')
        .isLength({ min: 3 }).withMessage('title is too short')
        .isLength({ max: 100 }).withMessage('title is too long'),
    validatorMiddleware, 
];