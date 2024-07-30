import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductTable from "@/components/products/ProsuctTable";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        //esto hace que aunque este en minusculas lo encuentre
        mode: "insensitive",
      },
    },
    include: {
      category: true,
    },
  });
  return products;
}

export default async function page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const products = await searchProducts(searchParams.search);
  return (
    <>
      <Heading>Resultados de busqueda: {searchParams.search}</Heading>
      <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
        <ProductSearchForm />
      </div>
      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-lg mt-5">No hay resultados :(</p>
      )}
    </>
  );
}
