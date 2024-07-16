import express,{ Application } from "express";
import cors from "cors";
import appRouter from "./route/index.js";

const app:Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use("/api/v1", appRouter )

export default app;