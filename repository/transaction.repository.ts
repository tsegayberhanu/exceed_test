import prisma from "../db/config"
export class TransactionRepository {
  // Fetch all bots paginated
  static async createTransaction(transactionData:{
    accountNumber:String,
    value:string,
    status:string,
    created_at:Date
  }) {
    const transaction = await prisma.tbl_transacion_history.create({data:transactionData})

    // return transaction;
  }
}