import getExchangeRate from "@/lib/get/getExchangeRate";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import ExchangeRateInputField from "./exchangeRate-Components/ExchangeRateInputField";

export default async function ManageExchangeRatePage({ params }) {
  //Fetching exchange rate
  const exchangeRate = await getExchangeRate(params.entityId);
  return (
    <>
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
          <div className=" sm:hidden text-lg font-bold grow">Exchange Rate</div>

          {/* "Caption Goes here" */}
          <div className="text-xs">
            Input the exchange rate at which your restaurant operates today
          </div>
          <div className="sm:flex items-center sm:space-x-6 pt-5">
            {/* PRICE INPUT FIELD */}
            <ExchangeRateInputField
              exchangeRate={exchangeRate}
              entityId={params.entityId}
            />
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
    </>
  );
}