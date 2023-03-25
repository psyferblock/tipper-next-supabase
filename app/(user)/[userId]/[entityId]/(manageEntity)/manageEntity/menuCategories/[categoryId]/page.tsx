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
      {/* MOBILE DIVS */}
      {/* <div className="sm:hidden px-3 flex items-center justify-between py-2 bg-gray-300 w-full z-50  fixed  text-2xl font-bold"> */}
      <div className="sm:hidden">Manage Highlights</div>
      <div className="sm:hidden">
        <MobileDropdownManagement />
        <ManageMenuItems
          entityId={params.entityId}
          menuItems={menuItems}
          menuCategoryId={params.categoryId}
        />
      </div>
      {/* </div> */}
      <div className="hidden sm:block">
        <ManageMenuItems
          entityId={params.entityId}
          menuItems={menuItems}
          menuCategoryId={params.categoryId}
        />
      </div>
    </>
  );
}
