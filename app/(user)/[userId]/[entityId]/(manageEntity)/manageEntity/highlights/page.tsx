import { getHighlightsServer } from "@/lib/get/getHighlights";
import { createServerClient } from "@/utils/supabase-server";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import ManageHighlights from "./highlights-Components/ManageHighlights";

export default async function ManageHighlightsPage({ params }) {
  //Fetching Highlights from DB
  const supabase = createServerClient();
  const entityHighlights = await getHighlightsServer(supabase, params.entityId);

  return (
    <>
      <div className="flex flex-col space-y-0 sm:space-y-0 w-full">
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
