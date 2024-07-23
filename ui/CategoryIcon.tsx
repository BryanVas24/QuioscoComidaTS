"use client";
import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type CategoryIconProps = {
  CategoryInfo: Category;
};
function CategoryIcon({ CategoryInfo }: CategoryIconProps) {
  const { name, slug } = CategoryInfo;

  const params = useParams<{ category: string }>();

  return (
    <div
      className={`${
        slug === params.category ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b`}
    >
      <div className="w-16 h-16 relative">
        <Image src={`/icon_${slug}.svg`} fill alt={`imagen de ${name}`} />
      </div>
      <Link href={`/order/${slug}`} className="text-xl font-bold">
        {name}
      </Link>
    </div>
  );
}

export default CategoryIcon;
