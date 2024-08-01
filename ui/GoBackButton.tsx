"use client";
import { useRouter } from "next/navigation";

export default function GoBackButton() {
  //boton para que te regrese a la paginación en la que te encontrabas
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center font-bold cursor-pointer"
    >
      Volver a productos
    </button>
  );
}
