import Ordercards from "@/components/order/Ordercards";
import { prisma } from "@/src/libs/prisma";
import Heading from "@/ui/Heading";

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
