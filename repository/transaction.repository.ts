import prisma from "../db/config"
export class TransactionRepository {
  // Fetch all bots paginated
  static async createTransaction(transactionData:any) {
    const transaction = await prisma.tbl_transacion_history.create({data:transactionData})
    return transaction;
  }
}