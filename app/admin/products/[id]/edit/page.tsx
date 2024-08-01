import EditProductForm from "@/components/products/EditProductForm";
import ProductForm from "@/components/products/ProductForm";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";
import { notFound } from "next/navigation";

async function getProductToEdit(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });
  if (!product) {
    //esto te lleva al not-found de su segmento
    notFound();
  }
  return product;
}
export default async function page({ params }: { params: { id: string } }) {
  const productId = params.id!;
  const product = await getProductToEdit(+productId);
  return (
    <div>
      <Heading>Edita el producto: {product.name}</Heading>
      <EditProductForm>
        <ProductForm product={product} />
      </EditProductForm>
    </div>
  );
}
