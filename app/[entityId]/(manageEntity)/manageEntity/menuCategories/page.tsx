import { getMenuCategoriesServer } from "@/lib/get/getMenuCategories";
import { createServerClient } from "@/utils/supabase-server";
import ManageMenuCategories from "./ManageMenuCategories";

export default async function ManageMenuCategoriesPage({ params }) {
  //Fetching from DB
  const supabase = createServerClient();
  const menuCategories = await getMenuCategoriesServer(
    supabase,
    params.entityId
  );

  const firstMenuCategoryId = menuCategories[0].id;
  // console.log("menu categgg", menuCategories);
  return (
    <ManageMenuCategories
      entityId={params.entityId}
      menuCategories={menuCategories}
      firstMenuCategoryIdOfEntity={firstMenuCategoryId}
    />
  );
}
