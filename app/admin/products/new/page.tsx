import AddProductForm from "@/components/products/AddProductForm";
import Heading from "@/ui/Heading";

export default function page() {
  return (
    <div>
      <Heading>Nuevo Producto</Heading>
      <AddProductForm />
    </div>
  );
}
