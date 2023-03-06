import Link from "next/link";
import CategoriesNavLink from "./manageEntity-Components/CategoriesNavLink";
import ManageEntityLeftMenu from "./manageEntity-Components/ManageEntityLeftMenu";

export default function Home({ children }: { children: React.ReactNode }) {
  const userId = 1;

  const managementCategories = [
    {
      name: "Menu",
      route: "menuCategories",
    },
    {
      name: "Exchange Rate",
      route: "exchangeRate",
    },
    {
      name: "General Information",
      route: "entityInfo",
    },
    {
      name: "Highlight Reels",
      route: "highlightReels",
    },
    {
      name: "QR Code",
      route: "qrCode",
    },
  ];
  return (
    <div className="bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 pt-0 pb-7 sm:py-8">
      {/* PAGE BG COLOR AND PADDING  */}
      <div className="hidden sm:block font-bold text-2xl pt-6 pb-4">
        Manage Entity
      </div>
      <div className="flex">
        {/* LEFT MENU */}
        {/* <ManageEntityLeftMenu /> */}
        <div className="hidden sm:block sm:w-[340px]">
          <div className="rounded-lg bg-white mr-4 py-6 flex flex-col drop-shadow-lg">
            {managementCategories.map((category) => (
              <CategoriesNavLink categoryRoute={category.route}>
                {category.name}
              </CategoriesNavLink>
            ))}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}
