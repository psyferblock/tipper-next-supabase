import ManageEntityLeftMenu from "../manageEntity-Components/ManageEntityLeftMenu";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 sm:h-fit min-h-screen sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        {/* PAGE BG COLOR AND PADDING */}
        <div className="hidden sm:block font-bold text-2xl pt-6 pb-4">
          Manage Entity
        </div>
        <div className="flex">
          {/* LEFT MENU */}
          <ManageEntityLeftMenu />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className="flex flex-col space-y-5 sm:space-y-0 w-full">
            <div className="flex items-center justify-between">
              <div className="sm:hidden font-bold text-2xl ">
                Manage Exchange Rate
              </div>
              <div className="sm:hidden">
                <MobileDropdownManagement />
              </div>
            </div>
            {/* ANNOUNCEMENT BANNERS CONTAINER */}
            <div className="h-fit  bg-white rounded-lg p-4 drop-shadow-lg">
              <div className="hidden sm:block text-lg font-bold grow">
                Manage Rate
              </div>
              <div className=" sm:hidden text-lg font-bold grow">
                Exchange Rate
              </div>

              {/* "Caption Goes here" */}
              <div className="text-xs">
                Input the exchange rate at which your restaurant operates today
              </div>
              <div className="sm:flex items-center sm:space-x-6 pt-5">
                {/* PRICE INPUT FIELD */}
                <div className="flex py-4 items-center border border-gray-300 hover:border-indigo-500 rounded-lg h-12 pl-4 mb-4">
                  <p className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
                    LBP
                  </p>
                  <input
                    type="number"
                    id="price"
                    className="h-6 block w-full border-0 pl-4 pr-12 my-0.5 py-0 focus:border-0 focus:ring-0 sm:text-sm"
                    placeholder="1506.00"
                  />
                </div>

                {/* "EQUIVALENT" ICON FOR MOBILE SCREENS */}
                <div className="sm:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 my-3 mx-auto"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>
                </div>
                <div className="hidden sm:block">
                  {/* "EQUIVALENT" ICON FOR DESKTOP SCREENS */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 pb-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                </div>
                {/* PRICE INPUT FIELD */}
                <div className="flex py-4 items-center border border-gray-300 rounded-lg h-12 pl-4 mb-4">
                  <p className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
                    USD
                  </p>
                  <p
                    id="price"
                    className="h-6 block w-60 text-gray-500 border-0 pl-4 pr-12 pt-0.5 focus:border-0 focus:ring-0 sm:text-sm"
                  >
                    1.00
                  </p>
                </div>
                <button className="hidden sm:block text-blue-500 hover:text-indigo-700 pb-4">
                  Apply
                </button>
              </div>
            </div>
            <div className="sm:hidden bg-gray-500 opacity-95 h-14 fixed bottom-0 left-0 right-0 py-2 px-12 flex justify-end space-x-5">
              <button className="w-28 h-10 rounded-3xl bg-white border hover:bg-gray-200 border-gray-600 text-black text-sm ">
                Cancel
              </button>
              <button className="w-28 h-10 rounded-3xl bg-blue-600 border hover:bg-blue-700 border-gray-600 text-black text-sm ">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
