import { getMenuItemsServer } from "@/lib/get/getMenuItems";
import { createServerClient } from "@/utils/supabase-server";
import MobileDropdownManagement from "../../manageEntity-Components/MobileDropdownManagement";
import ManageMenuItems from "./ManageMenuItems";

export default async function ManageMenuCategoriesPage({ params }) {
  //Fetching from DB
  const supabase = createServerClient();
  const menuItems = await getMenuItemsServer(supabase, params.categoryId);
  return (
    <>
      <ManageMenuItems
        entityId={params.entityId}
        menuItems={menuItems}
        menuCategoryId={params.categoryId}
      />
    </>
  );
}
