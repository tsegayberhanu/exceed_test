import { catchAsync } from "../util/catchAsync.util";
import { APIResponder } from "../util/api.responder.util";
import { ApplicationRepository } from "../repository/application.repository";
export class TransactionController {
  static createTransaction = catchAsync(async (req, res) => {
    const { accountNumber, amount, narration } = req.body;
    const checkExisting = await ApplicationRepository.findApplication(accountNumber)

    if (checkExisting) {
      // create transaction
    }
  });
}
