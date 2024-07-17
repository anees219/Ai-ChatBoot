import { Request, Response, NextFunction } from "express";
import User from "../model/User.js";
import { hash , compare } from "bcrypt";

async function getAllUsers(req:Request ,res:Response,next:NextFunction) {

    const users = await User.find();
    return res.status(200).json(users);
}

async function getUserbyEmail(email:string) {
    const user  = await User.findOne({ email: email });
    return user;
}

async function verifyPassword(hash:string , password:string) {
    const verified = compare(password,hash);
    return verified;
}

async function createNewUser(req:Request) {
    const {name,email,password} = req.body;
    const hashedPassword = await hash(password,10);

    const user = new User({
        name:name,
        email:email.trim(),
        password:hashedPassword
    });
    await user.save();
    
    return user;
}

export {getAllUsers,createNewUser,getUserbyEmail,verifyPassword};