import {catchAsync} from "../util/catchAsync.util"
import {BankRepository} from "../repository/bank.repositor"
import { APIResponder } from "../util/api.responder.util";
export class BankController {
  static getAllBanks = catchAsync(async(req, res) => {
    const banks = await BankRepository.getAllBanks()
    APIResponder.ok(res,banks);
  })
}