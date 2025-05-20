import prisma from "../db/config";
export class ApplicationRepository {
  static async findApplication(account_number: string) {
    const application = await prisma.tbl_application.findFirst({
      where: { account_number: account_number,
        status:'Submitted'
       },
    });
    return application;
  }
  static async submitApplication(applicationData:any){
    const application = await prisma.tbl_application.create({data:applicationData})
  }
}
