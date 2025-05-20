import express from "express";
import {notFoundHandler} from "./middlewares/notfound.middleware"
import {errorHandler} from "./middlewares/error.middleware"
import bankRouter from "./routes/banks.route"

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/banks", bankRouter);

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// 404 Handler
 app.use(notFoundHandler);

 // any potential error
app.use(errorHandler);

export default app;
