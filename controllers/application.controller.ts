import { catchAsync } from "../util/catchAsync.util";
import {ApplicationRepository} from "../repository/application.repository"
import {BankRepository} from "../repository/bank.repositor"
export class ApplicationController {
  static submitApplication = catchAsync(async (req, res) => {
    const {bankId, branchId, accountName, accountNumber, status} = req.body;

    const bank = await BankRepository.getBank(bankId);
 // fetch branch
    const application = await ApplicationRepository.submitApplication({
      bankId,
      branchId,
      accountName,accountNumber,
      status
    })

  });
}
