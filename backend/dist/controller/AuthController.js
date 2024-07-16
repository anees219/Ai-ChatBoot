import { createNewUser } from "./UserController.js";
async function registerUser(req, res, next) {
    const user = await createNewUser(req);
    return res.status(200).send(user);
}
export { registerUser };
//# sourceMappingURL=AuthController.js.map