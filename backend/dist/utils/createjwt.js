import jwt from "jsonwebtoken";
function generateJWT(user) {
    const payload = {
        id: user._id,
        email: user.email
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { "expiresIn": "1d" });
    console.log(token);
    return token;
}
export default generateJWT;
//# sourceMappingURL=createjwt.js.map