import Ordercards from "@/components/order/Ordercards";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";
import { revalidatePath } from "next/cache";

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return orders;
}
async function OrdersPage() {
  const orders = await getPendingOrders();

  return (
    <>
      <Heading>Administrar ordenes</Heading>
      <form
        action={async () => {
          "use server";
          revalidatePath("/admin/orders");
        }}
      >
        <input
          className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
          type="submit"
          value={"Actualizar ordenes"}
        />
      </form>
      {orders.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {orders.map((order) => (
            <Ordercards key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <p className="text-center">No hay Ordenes pendientes</p>
      )}
    </>
  );
}

export default OrdersPage;
