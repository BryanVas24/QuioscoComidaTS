import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    //aca estas haciendo seed a la db insertando datos que vienen desde los otros archivos
    await Promise.allSettled([
      prisma.category.createMany({ data: categories }),
      prisma.product.createMany({ data: products }),
    ]);
  } catch (error) {
    console.error(error);
  }
}
