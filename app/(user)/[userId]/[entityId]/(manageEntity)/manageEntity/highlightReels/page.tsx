import getReels from "@/lib/get/getReels";
import ManageHighlightReels from "./highlightReels-Components/ManageHighlightReels";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";

export default async function ManageHighlightReelsPage({ params }) {
  const entityReels = await getReels(params.entityId);

  return (
    <>
      <div className="sm:hidden px-3 flex items-center justify-between py-2 bg-gray-300 w-full z-50  fixed  text-2xl font-bold">
        <p>Manage Highlight Reels</p>
        <div className="sm:hidden">
          <MobileDropdownManagement />
        </div>
      </div>

      <div className="flex flex-col space-y-5 sm:space-y-0 w-full">
        {/* DIV TO COMPENSATE THE HEADER DIV FIXED */}
        <div className="h-14 sm:h-0"></div>

        <div className="hidden sm:flex items-center justify-between">
          <div className="sm:hidden font-bold text-2xl ">
            Manage Highlight Reels
          </div>
          <div className="sm:hidden">
            <MobileDropdownManagement />
          </div>
        </div>
        <ManageHighlightReels
          entityId={params.entityId}
          listOfReels={entityReels}
        />
      </div>
    </>
  );
}
