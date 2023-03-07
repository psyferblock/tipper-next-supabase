import MenuCategoriesNavLink from "./MenuCategoriesNavLink";

export default function MenuNavigation() {
  const menuCategories = [
    {
      name: "Breakfast",
      route: "breakfast",
    },
    {
      name: "Lunch",
      route: "lunch",
    },
    {
      name: "Dinner",
      route: "dinner",
    },
    {
      name: "Desert",
      route: "desert",
    },
    {
      name: "Drinks",
      route: "drinks",
    },
    {
      name: "Our Specialties",
      route: "ourSpecialties",
    },
  ];

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col pb-3 sm:pb-0 sm:gap-0 overflow-x-auto sm:flex sm:flex-col font-semibold sm:text-base sm:w-44 text-gray-400 sm:space-y-0">
        {menuCategories.map((category) => (
          <MenuCategoriesNavLink categoryRoute={category.route}>
            {category.name}
          </MenuCategoriesNavLink>
        ))}
      </div>
    </>
  );
}
