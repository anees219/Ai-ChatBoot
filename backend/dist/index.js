import app from "./app.js";
import { connectToDB } from "./db/db.js";
connectToDB().then(() => {
    try {
        app.listen(8000, () => {
            console.log("Server is up on 127.0.0.1:8000");
        });
    }
    catch (error) {
        console.log("Server Crashed" + error);
    }
});
//# sourceMappingURL=index.js.map