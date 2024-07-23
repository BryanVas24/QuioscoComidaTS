import { formatCurrency } from "@/utils";
import { Product } from "@prisma/client";

type ProductCardProps = {
  productInformation: Product;
};
export default function ProductCard({ productInformation }: ProductCardProps) {
  const { name, price } = productInformation;
  return (
    <div className="border bg-white">
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatCurrency(price)}
        </p>
      </div>
    </div>
  );
}
