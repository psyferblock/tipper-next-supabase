import getHighlights from "@/lib/get/getHighlights";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import ManageHighlights from "./highlights-Components/ManageHighlights";

export default async function ManageHighlightsPage({ params }) {
  const entityHighlights = await getHighlights(params.entityId);

  return (
    <>
      <div className="sm:hidden px-3 flex items-center justify-between py-2 bg-gray-300 w-full z-50  fixed  text-2xl font-bold">
        <p>Manage Highlights</p>
        <div className="sm:hidden">
          <MobileDropdownManagement />
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:space-y-0 w-full">
        {/* DIV TO COMPENSATE THE HEADER DIV FIXED */}
        <div className="h-14 sm:h-0"></div>

        <div className="hidden sm:flex items-center justify-between">
          <div className="sm:hidden font-bold text-2xl ">Manage Highlights</div>
          <div className="sm:hidden">
            <MobileDropdownManagement />
          </div>
        </div>
        <ManageHighlights
          entityId={params.entityId}
          listOfHighlights={entityHighlights}
        />
      </div>
    </>
  );
}
