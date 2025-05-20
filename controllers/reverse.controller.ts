import { catchAsync } from "../util/catchAsync.util";
import { APIResponder } from "../util/api.responder.util";
import { ApplicationRepository } from "../repository/application.repository";
import { TransactionRepository } from "../repository/transaction.repository";
export class ReverseController {
  static reverseTransaction = catchAsync(async (req, res) => {
    const { transactionId,reason} = req.body;
    const checkExisting = await TransactionRepository.findTransaction(transactionId)
    if (checkExisting) {
      const created = await TransactionRepository.createTransaction({accountNumber, value:amount, status:"SUCCESS"})
      APIResponder.created(res, created);
    }else{

    }
  });
}
