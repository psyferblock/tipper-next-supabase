import { getMenuItemsServer } from "@/lib/get/getMenuItems";
import { createServerClient } from "@/utils/supabase-server";
import ManageMenuItems from "./ManageMenuItems";

export default async function ManageMenuCategoriesPage({ params }) {
  //Fetching from DB
  const supabase = createServerClient();
  const menuItems = await getMenuItemsServer(supabase, params.categoryId);
  return (
    <ManageMenuItems menuItems={menuItems} menuCategoryId={params.categoryId} />
  );
}
