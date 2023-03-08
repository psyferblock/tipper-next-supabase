import getMenuCategories from "@/lib/getMenuCategories";
import ManageMenuCategories from "./menuCategories-Components/ManageMenuCategories";

export default async function ManageMenuCategoriesPage({ params }) {
  const menuCategories = await getMenuCategories(params.entityId);
  console.log("menu categgg", menuCategories);
  return <ManageMenuCategories menuCategories={menuCategories} />;
}
