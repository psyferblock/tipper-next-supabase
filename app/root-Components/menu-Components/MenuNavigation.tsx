import getMenuCategories from "@/lib/get/getMenuCategories";
import MenuCategoriesNavLink from "./MenuCategoriesNavLink";

export default async function MenuNavigation({ entityId }) {
  const menuCategories = await getMenuCategories(entityId);

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col pb-3 sm:pb-0 sm:gap-0 overflow-x-auto sm:flex sm:flex-col font-semibold sm:text-base sm:w-44 text-gray-400 sm:space-y-0">
        {menuCategories.map((category) => (
          <MenuCategoriesNavLink categoryId={category.id} entityId={entityId}>
            {category.menu_category_name}
          </MenuCategoriesNavLink>
        ))}
      </div>
    </>
  );
}
