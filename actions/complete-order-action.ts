"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/src/libs/prisma";

export async function completeOrder(formData: FormData) {
  const orderId = formData.get("order_id")!;
  try {
    await prisma.order.update({
      where: {
        id: +orderId,
      },
      data: {
        status: true,
        orderReadyAt: new Date(Date.now()),
      },
    });
    //es para hacer re-fetching de toda una orden
    revalidatePath("/admin/orders");
  } catch (error) {
    console.error(error);
  }
}
