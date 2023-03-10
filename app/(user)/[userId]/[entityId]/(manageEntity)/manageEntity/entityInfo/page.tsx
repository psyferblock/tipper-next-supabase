import getEntityInfos from "@/lib/get/getEntityInfos";
import ManageAboutUs from "./entityInfos-Components/ManageAboutUs";
import ManageContactUs from "./entityInfos-Components/ManageContactUs";
import ManageCoverPhotos from "./entityInfos-Components/ManageCoverPhotos";
import ManageSocialMedia from "./entityInfos-Components/ManageSocialMedia";
import ManageTags from "./entityInfos-Components/ManageTags";
import ManageWorkingHours from "./entityInfos-Components/ManageWorkingHours";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import { useManageEntityInfosContext } from "./EntityInfoContext";
import updateEntityInfos from "@/lib/update/updateEntityInfos";
import StickyBarSaveCancel from "./entityInfos-Components/StickyBarSaveCancel";

export default async function ManageEntityInfosPage() {
  return (
    <>
      <div className="flex flex-col w-full pb-10">
        <div className="sm:hidden w-full fixed py-3 z-50 bg-gray-300 flex items-center justify-between">
          <div className="sm:hidden font-bold text-2xl ">
            Manage General Info
          </div>
          <div className="sm:hidden">
            <MobileDropdownManagement />
          </div>
        </div>
        {/* DIV USED TO COMPENSATE FOR NAVBAR HEIGHT */}
        <div className="h-24 sm:h-0"></div>

        <div className="space-y-5">
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <ManageCoverPhotos />
          <ManageTags />
          <ManageWorkingHours />
          <ManageSocialMedia />
          <ManageAboutUs />
          <ManageContactUs />
          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          <StickyBarSaveCancel />
        </div>
      </div>
    </>
  );
}
