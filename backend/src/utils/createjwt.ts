import jwt from "jsonwebtoken";
import userDocumnet from "../interface/userInterface.js";


function generateJWT(user:userDocumnet) {

    const payload:object = {
        id : user._id,
        email: user.email
    };

    const token = jwt.sign(payload,process.env.JWT_SECRET,{"expiresIn": "1d"})
    console.log(token);
    return token;
}

export default generateJWT;