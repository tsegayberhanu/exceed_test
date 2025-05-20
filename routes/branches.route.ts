import express from 'express';
import {BranchController} from "../controllers/branch.controller"
const branchRouter = express.Router();

branchRouter.get("/",   BranchController.getBankBranches);

export default branchRouter;