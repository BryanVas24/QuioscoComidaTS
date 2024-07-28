import ProductTable from "@/components/products/ProsuctTable";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";

async function getproducts(page: number, pageSize: number) {
  const skip = (page - 1) * pageSize;
  const products = await prisma.product.findMany({
    //take te dice cuantos registros traer
    take: pageSize,
    //skip cuantos registros debe sltarse
    skip,
    include: {
      category: true,
    },
  });
  return products;
}
export default async function page({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const page = +searchParams.page || 1;
  const pageSize = 10;
  const products = await getproducts(page, pageSize);

  return (
    <>
      <Heading>Administrar productos</Heading>
      <ProductTable products={products} />
    </>
  );
}
