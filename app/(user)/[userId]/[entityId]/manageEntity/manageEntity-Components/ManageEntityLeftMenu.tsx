import Link from "next/link";
export default function ManageEntityMenu(props) {
  const userId = 1;

  return (
    <>
      <div className="hidden sm:block sm:w-[340px]">
        <div className="rounded-lg bg-white mr-4 py-6  flex flex-col drop-shadow-lg">
          <Link
            href={`${userId}/1/manageEntity/menuCategories`}
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Menu
          </Link>
          <Link
            href={`${userId}/1/manageEntity/exchangeRate`}
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Exchange Rate
          </Link>
          <Link
            href={`${userId}/1/manageEntity/entityInfo`}
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            General Information
          </Link>
          <Link
            href={`${userId}/1/manageEntity/highlightReels`}
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Highlight Reels
          </Link>
          {/* <Link
            href={`${userId}/1/manageEntity/highlightReels`}
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Inventory
          </Link> */}
          <Link
            href={`${userId}/1/manageEntity/qrCode`}
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            QR Code
          </Link>
        </div>
      </div>
    </>
  );
}
