import express from 'express';
import { BankController } from '../controllers/bank.controller';

const bankRouter = express.Router();

bankRouter.get("/",   BankController.getAllBanks);

export default bankRouter;