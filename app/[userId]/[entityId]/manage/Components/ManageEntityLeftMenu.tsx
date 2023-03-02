export default function ManageEntityMenu() {
  return (
    <>
      <div className="hidden sm:block sm:w-[340px]">
        <div className="rounded-lg bg-white mr-4 py-6  flex flex-col drop-shadow-lg">
          <a
            href="/management/menu"
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Menu
          </a>
          <a
            href="/management/exchangeRate"
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Exchange Rate
          </a>
          <a
            href="/management/entityInfo"
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            General Information
          </a>
          <a
            href="/management/highlightReels"
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Highlight Reels
          </a>
          <a
            href="/management/inventory"
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            Inventory
          </a>
          <a
            href="/management/qrCode"
            className="text-black hover:bg-gray-100 px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600"
          >
            QR Code
          </a>
        </div>
      </div>
    </>
  );
}
