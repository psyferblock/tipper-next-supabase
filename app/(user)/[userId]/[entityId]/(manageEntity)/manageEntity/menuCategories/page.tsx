import getMenuCategories from "@/lib/get/getMenuCategories";
import ManageMenuCategories from "./ManageMenuCategories";

export default async function ManageMenuCategoriesPage({ params }) {
  const menuCategories = await getMenuCategories(params.entityId);
  console.log("menu categgg", menuCategories);
  return <ManageMenuCategories menuCategories={menuCategories} />;
}
