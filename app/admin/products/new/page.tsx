import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/ui/Heading";
//lo de abajo es para poder mezclar componentes del cliente con componentes del servidor
export default function page() {
  return (
    <div>
      <Heading>Nuevo Producto</Heading>
      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </div>
  );
}
