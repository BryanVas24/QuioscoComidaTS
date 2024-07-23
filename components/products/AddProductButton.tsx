"use client";
//Si alguien se pregunta por que este boton esta separado es porque en el componente en el que se muestra es lo unico que se debé renderizar del lado del cliente, entonces es más rentable movelro solo a el para el cliente para no retrasar todo un componente
import { useStore } from "@/src/store";
import { Product } from "@prisma/client";

type AddProductButtonProps = {
  product: Product;
};
function AddProductButton({ product }: AddProductButtonProps) {
  //extrayendo la función de añadir a la orden
  const addToOrder = useStore((state) => state.addToOrder);
  return (
    <button
      type="button"
      className="bg-orange-500 hover:bg-orange-600 w-full mt-5 p-3 uppercase font-bold cursor-pointer text-white"
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  );
}

export default AddProductButton;
