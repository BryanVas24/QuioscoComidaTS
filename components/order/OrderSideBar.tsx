import { prisma } from "@/src/libs/prisma";

//función para traer todas las categorias
async function getCategories() {
  return await prisma.category.findMany();
}
//caracteristica de next, podes tener componentes asincronos
const OrderSideBar = async () => {
  const categories = await getCategories();

  return <aside className="md:w-72 md:h-screen bg-white">OrderSideBar</aside>;
};

export default OrderSideBar;
