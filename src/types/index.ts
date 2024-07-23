import { Product } from "@prisma/client";

//de esta manera haces pick y agregas más atributos
export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
  quantity: number;
  subtotal: number;
};
