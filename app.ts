import express from "express";
import {notFoundHandler} from "./middlewares/notfound.middleware"
import {errorHandler} from "./middlewares/error.middleware"
import bankRouter from "./routes/banks.route"
import branchRouter from "./routes/branches.route"
import transactionRouter from "./routes/transaction.route"
import reverseRouter from "./routes/reverse.route"
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/banks", bankRouter);
app.use("/api/branches", branchRouter);
app.use("/api/transaction", transactionRouter)
app.use("/api/reverse", reverseRouter);
app.use("/api/applications", )

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

// 404 Handler
 app.use(notFoundHandler);

 // any potential error
app.use(errorHandler);

export default app;
