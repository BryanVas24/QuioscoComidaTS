import { formatCurrency } from "@/utils";
import { Product } from "@prisma/client";
import Image from "next/image";

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
        <button
          type="button"
          className="bg-orange-500 hover:bg-orange-600 w-full mt-5 p-3 uppercase font-bold cursor-pointer text-white"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
