import { PrismaClient } from "@prisma/client";
import CustomerController from "./controller/CustomerController";
import ProductController from "./controller/ProductController";

const prisma = new PrismaClient();

async function main() {
  const productController = new ProductController();
  const customerController = new CustomerController();

  const product = await productController.create({
    item: "Motorhead",
    about: "A legendary and amazing rock and roll band",
    howMany: 5,
    price: "5.000",
  });

  const customer = await customerController.create({
    name: "thais",
    email: "thais@prisma.io",
    mobile: "3344-4433",
    payment: "card",
  });
  console.log(customer);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
