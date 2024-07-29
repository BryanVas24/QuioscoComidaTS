import ProductsPagination from "@/components/products/ProductsPagination";
import ProductTable from "@/components/products/ProsuctTable";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";
import { redirect } from "next/navigation";

async function productCount() {
  //cuenta los registros
  return await prisma.product.count();
}

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

  if (page < 0) redirect("/admin/products");

  const productsData = await getproducts(page, pageSize);
  const totalProductsData = await productCount();

  const [products, totalProducts] = await Promise.all([
    productsData,
    totalProductsData,
  ]);

  const totalPages = Math.ceil(totalProducts / pageSize);

  if (page > totalPages) redirect("/admin/products");

  return (
    <>
      <Heading>Administrar productos</Heading>
      <ProductTable products={products} />
      <ProductsPagination page={page} totalPages={totalPages} />
    </>
  );
}
