import { Router } from "express";
import { getAllUsers } from "../controller/UserController.js";
import { registerUser } from "../controller/AuthController.js";
const userRouter = Router();
userRouter.get("/", getAllUsers);
userRouter.post("/sign-in", registerUser);
export default userRouter;
//# sourceMappingURL=user.js.map