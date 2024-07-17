import { Document, Types } from "mongoose";

interface userDocumnet extends Document{
    _id : Types.ObjectId;
    email:String
}

export default userDocumnet;