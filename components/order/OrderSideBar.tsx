import { prisma } from "@/src/libs/prisma";
import CategoryIcon from "@/ui/CategoryIcon";

//función para traer todas las categorias
async function getCategories() {
  return await prisma.category.findMany();
}
//caracteristica de next, podes tener componentes asincronos
const OrderSideBar = async () => {
  const categories = await getCategories();

  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <nav className="mt-10">
        {categories.map((category) => (
          <CategoryIcon key={category.id} CategoryInfo={category} />
        ))}
      </nav>
    </aside>
  );
};

export default OrderSideBar;
