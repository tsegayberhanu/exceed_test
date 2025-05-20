import prisma from "../db/config"
export class BankRepository {
  // Fetch all bots paginated
  static async getAllBanks() {
    const banks = await  prisma.tbl_bank.findMany();

    return banks;
  }
}