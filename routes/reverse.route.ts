import express from 'express';
import { ReverseController } from '../controllers/reverse.controller';
const reverseRouter = express.Router();
reverseRouter.post("/",   ReverseController.reverseTransaction);
export default reverseRouter;