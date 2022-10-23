import { PrismaClient, Product } from "@prisma/client";

class ProductController {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }
  async create(data: Omit<Product, "id">) {
    try {
      return this.prisma.product.create({
        data: {
          ...data,
        },
      });
    } catch (e) {
      return e;
    }
  }
}

export default ProductController;
