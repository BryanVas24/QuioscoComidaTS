import ProductCard from "@/components/products/ProductCard";
import { categories } from "@/prisma/data/categories";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}

export default async function Orderpage({
  params,
}: {
  params: { category: string };
}) {
  const products = await getProducts(params.category);

  return (
    <>
      <Heading>Elige y personaliza tu pedido a continuación</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} productInformation={product} />
        ))}
      </div>
    </>
  );
}
