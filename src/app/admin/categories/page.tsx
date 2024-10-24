import { getCategoriesWithProducts } from "@/actions/categories";
import CategoryPageComponent from "./page-component";

export default async function Categories() {
  const categories = await getCategoriesWithProducts();

  console.log(categories);
  return <CategoryPageComponent categories={categories} />;
}
