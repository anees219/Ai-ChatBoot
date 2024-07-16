import { connect, disconnect } from "mongoose";
async function connectToDB() {
    try {
        await connect(process.env.MONGODB_URI);
    }
    catch (error) {
        console.error(error);
    }
}
async function disconnectDB() {
    try {
        await disconnect();
    }
    catch (error) {
        console.error(error);
    }
}
export { connectToDB, disconnectDB };
//# sourceMappingURL=db.js.map