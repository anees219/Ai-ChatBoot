import { Request,Response,NextFunction, request } from "express";
import { createNewUser } from "./UserController.js";

async function registerUser(req:Request, res:Response, next:NextFunction) {
    
    const user = await createNewUser(req);

    return res.status(200).send(user);
    
}

export {registerUser};