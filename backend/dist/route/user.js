import { Router } from "express";
import { getAllUsers } from "../controller/UserController.js";
import { loginUser, registerUser } from "../controller/AuthController.js";
import validateEmailAndPassword from "../utils/userValidation.js";
const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/sign-in", validateEmailAndPassword, registerUser);
userRouter.post("/login", validateEmailAndPassword, loginUser);
export default userRouter;
//# sourceMappingURL=user.js.map