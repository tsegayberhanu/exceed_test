import prisma from "../db/config"
export class BankRepository {
  // Fetch all bots paginated
  static async getAllBanks() {
    const banks = await  prisma.tbl_bank.findMany();

    return banks;
  }
  static async getBank(bankId:number) {
    const banks = await  prisma.tbl_bank.findUnique({where:{id:bankId}});
    return banks;
  }
  
}