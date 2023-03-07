import supabase from "@/utils/supabase";
import MenuCategoriesNavLink from "./MenuCategoriesNavLink";

export default async function MenuNavigation({ entityId }) {
  const { data, error } = await supabase
    .from("menu_category")
    .select("*")
    .eq("entity_id", `${entityId}`);
  if (error) throw error;
  const menuCategories = data;
  // const menuCategories = [
  //   {
  //     name: "Breakfast",
  //     route: "breakfast",
  //   },
  //   {
  //     name: "Lunch",
  //     route: "lunch",
  //   },
  //   {
  //     name: "Dinner",
  //     route: "dinner",
  //   },
  //   {
  //     name: "Desert",
  //     route: "desert",
  //   },
  //   {
  //     name: "Drinks",
  //     route: "drinks",
  //   },
  //   {
  //     name: "Our Specialties",
  //     route: "ourSpecialties",
  //   },
  // ];

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
