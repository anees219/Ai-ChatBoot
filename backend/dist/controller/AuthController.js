import { createNewUser, getUserbyEmail, verifyPassword } from "./UserController.js";
import User from "../model/User.js";
import { validationResult } from "express-validator";
import generateJWT from "../utils/createjwt.js";
async function registerUser(req, res, next) {
    try {
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const userExist = await User.findOne({ email: req.body.email.trim() });
        if (userExist) {
            return res.status(401).json({ message: "User with this email already exists" });
        }
        else {
            const user = await createNewUser(req);
            // Generate JWT token
            const token = generateJWT(user);
            return res.status(200).cookie("token", token, { "httpOnly": true, sameSite: 'strict' }).json("Register successfully");
        }
    }
    catch (error) {
        console.error('Error checking user existence:', error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
async function loginUser(req, res, next) {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { email, password } = req.body;
        const user = await getUserbyEmail(email.trim());
        const verify = await verifyPassword(user.password, password);
        if (user && verify) {
            // Generate JWT token
            const token = generateJWT(user);
            return res.status(200).cookie("token", token, { "httpOnly": true, sameSite: 'strict' }).json("logged in Succesfully");
        }
        else {
            return res.status(404).json({ "message": "user with this email does not found" });
        }
    }
    catch (error) {
        console.error('Error checking user existence:', error.message);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
export { registerUser, loginUser };
//# sourceMappingURL=AuthController.js.map