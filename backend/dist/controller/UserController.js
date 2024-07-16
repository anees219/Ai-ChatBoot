import User from "../model/User.js";
async function getAllUsers(req, res, next) {
    const users = await User.findById({ _id: "6696f3ccb8ecbfaef8fe57a9" });
    return res.status(200).json(users);
}
async function createNewUser(req) {
    const { name, email, password } = req.body;
    const user = new User({
        name: name,
        email: email,
        password: password
    });
    user.save();
    return JSON.stringify(user);
}
export { getAllUsers, createNewUser };
//# sourceMappingURL=UserController.js.map