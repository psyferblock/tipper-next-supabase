import Link from "next/link";
export default function ManageEntityMenu(props) {
  const userId = 1;

  const managementCategories = [
    {
      name: "Menu",
      routeSegment: "menuCategories",
    },
    {
      name: "Exchange Rate",
      routeSegment: "exchangeRate",
    },
    {
      name: "General Information",
      routeSegment: "entityInfo",
    },
    {
      name: "Highlight Reels",
      routeSegment: "highlightReels",
    },
    {
      name: "QR Code",
      routeSegment: "qrCode",
    },
  ];
  return (
    <>
      <div className="hidden sm:block sm:w-[340px]">
        <div className="rounded-lg bg-white mr-4 py-6  flex flex-col drop-shadow-lg">
          {managementCategories.map((category) => (
            <Link
              href={`${userId}/1/manageEntity/${category.routeSegment}`}
              className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
