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

main()
  .then(async () => {
    //si todo se ejecuta correctamente inserta los datos y se desconecta
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    //sino muestra el error en consola
    console.error(e);
    //se desconecta de la db
    await prisma.$disconnect();
    //detiene la ejecución de la aplicación
    process.exit(1);
  });
