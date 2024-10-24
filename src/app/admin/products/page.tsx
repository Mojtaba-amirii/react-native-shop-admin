import { getCategoriesWithProducts } from "@/actions/categories";
import { getProductsWithCategories } from "@/actions/products";
import { ProductPageComponent } from "./page-component";

export default async function Products() {
  const categories = await getCategoriesWithProducts();
  const productWithCategories = await getProductsWithCategories();

  return (
    <ProductPageComponent
      categories={categories}
      productsWithCategories={productWithCategories}
    />
  );
}
