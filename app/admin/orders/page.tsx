"use client";
import Ordercards from "@/components/order/Ordercards";
import { prisma } from "@/src/libs/prisma";
import { OrderWithProducts } from "@/src/types";
import Heading from "@/ui/Heading";
import { revalidatePath } from "next/cache";
import useSWR from "swr";

function OrdersPage() {
  const url = "/admin/orders/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);

  const { data, error, isLoading } = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });
  if (isLoading)
    return <p className="text-center text-amber-600 mt-20">Cargando...</p>;

  if (data)
    return (
      <>
        <Heading>Administrar ordenes</Heading>

        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
            {data.map((order) => (
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
