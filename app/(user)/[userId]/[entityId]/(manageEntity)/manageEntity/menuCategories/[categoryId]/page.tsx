import getMenuItems from "@/lib/get/getMenuItems";
import ManageMenuItems from "./ManageMenuItems";

export default async function ManageMenuCategoriesPage({ params }) {
  const menuItems = await getMenuItems(params.categoryId);
  return (
    <ManageMenuItems
      userId={params.userId}
      entityId={params.entityId}
      menuItems={menuItems}
      menuCategoryId={params.categoryId}
    />
  );
}
