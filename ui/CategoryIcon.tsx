import { Category } from "@prisma/client";

type CategoryIconProps = {
  CategoryInfo: Category;
};
function CategoryIcon({ CategoryInfo }: CategoryIconProps) {
  const { name } = CategoryInfo;
  return <div>{name}</div>;
}

export default CategoryIcon;
