import { getFirstMenuCategoryIdServer } from "@/lib/get/getFirstMenuCategoryId";
import { createServerClient } from "@/utils/supabase-server";
import Link from "next/link";
import CategoriesNavLink from "./manageEntity-Components/CategoriesNavLink";

export default async function ManageEntityLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  //Fetching from DB
  const supabase = createServerClient();
  const firstMenuCategoryId = await getFirstMenuCategoryIdServer(
    supabase,
    params.entityId
  );

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
      <Link
        href={`${params.userId}/${params.entityId}/menu/${firstMenuCategoryId}`}
        className="hidden sm:flex items-center font-bold text-2xl pt-6 pb-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p>Manage Entity</p>
      </Link>

      <div className="flex">
        {/* LEFT MENU */}
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
