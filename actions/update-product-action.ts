"use server";

import { prisma } from "@/src/libs/prisma";
import { ProductSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function updateproduct(data: unknown, id: number) {
  const result = ProductSchema.safeParse(data);
  if (!result.success) {
    return {
      errors: result.error.issues,
    };
  }
  await prisma.product.update({
    where: {
      id,
    },
    data: result.data,
  });
  //revalida los datos
  revalidatePath("/admin/products");
}
