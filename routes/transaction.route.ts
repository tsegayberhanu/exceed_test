import express from 'express';
import { TransactionController } from '../controllers/transaction.controller';
const transactionRouter = express.Router();
transactionRouter.post("/",   TransactionController.createTransaction);
export default transactionRouter;