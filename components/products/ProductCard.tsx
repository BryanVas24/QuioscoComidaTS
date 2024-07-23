import { formatCurrency } from "@/src/utils";
import { Product } from "@prisma/client";
import Image from "next/image";
import AddProductButton from "./AddProductButton";

type ProductCardProps = {
  productInformation: Product;
};
export default function ProductCard({ productInformation }: ProductCardProps) {
  const { name, price, image } = productInformation;
  return (
    <div className="border bg-white">
      <Image
        width={500}
        height={400}
        src={`/products/${image}.jpg`}
        alt={name}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(price)}
        </p>
        <AddProductButton product={productInformation} />
      </div>
    </div>
  );
}
