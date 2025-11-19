import { ProductPageComponent } from "./page-component";
import { getProductsWithCategories } from "@/actions/products";
import { getCategoriesWithProducts } from "@/actions/categories";

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
