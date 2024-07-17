import User from "../model/User.js";
import { hash, compare } from "bcrypt";
async function getAllUsers(req, res, next) {
    const users = await User.find();
    return res.status(200).json(users);
}
async function getUserbyEmail(email) {
    const user = await User.findOne({ email: email });
    return user;
}
async function verifyPassword(hash, password) {
    const verified = compare(password, hash);
    return verified;
}
async function createNewUser(req) {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = new User({
        name: name,
        email: email.trim(),
        password: hashedPassword
    });
    await user.save();
    return user;
}
export { getAllUsers, createNewUser, getUserbyEmail, verifyPassword };
//# sourceMappingURL=UserController.js.map