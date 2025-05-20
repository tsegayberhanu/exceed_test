import express from 'express';
import { ApplicationController } from '../controllers/application.controller';
const applicationRouter = express.Router();
applicationRouter.post("/submit",   ApplicationController.submitApplication);
export default applicationRouter;