import { prisma } from "@/src/libs/prisma";

//al usar swr se necesita poner los nombres de las funciones como verbos http
export async function GET() {
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
  //así se debe hacer el return
  return Response.json(orders);
}
