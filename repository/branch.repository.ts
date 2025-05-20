import prisma from "../db/config"
export class BranchRepository {
  // Fetch all bots paginated
  static async getBankBranches(bankId:number) {
    const branches = await  prisma.tbl_branch.findMany({
        where:{
            bank_id:bankId
        }
    });

    return branches;
  }
}