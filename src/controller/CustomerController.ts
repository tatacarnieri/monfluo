import { PrismaClient, Customer } from "@prisma/client";

class CustomerController {
  private prisma: PrismaClient;
  
  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(data: Omit <Customer, "id">) {
    try {
      return this.prisma.customer.create({
        data: {
          ...data,
        },
      });
    } catch (e) {
      return e;
    }
  }
}

export default CustomerController;
