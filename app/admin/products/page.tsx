import ProductTable from "@/components/products/ProsuctTable";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";

async function getproducts() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
    },
  });
  return products;
}
export default async function page() {
  const products = await getproducts();

  return (
    <>
      <Heading>Administrar productos</Heading>
      <ProductTable products={products} />
    </>
  );
}
