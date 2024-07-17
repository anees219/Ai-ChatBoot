import { body } from "express-validator"

const validateEmailAndPassword = [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 })
];

export default validateEmailAndPassword;