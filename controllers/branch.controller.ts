import {catchAsync} from "../util/catchAsync.util"
import { APIResponder } from "../util/api.responder.util";
import { BranchRepository } from "../repository/branch.repository";
export class BranchController {
  static getBankBranches = catchAsync(async(req, res) => {
    const {bankId} = req.query
    const Branches = await BranchRepository.getBankBranches(Number(bankId))
    APIResponder.ok(res,Branches);
  })
}