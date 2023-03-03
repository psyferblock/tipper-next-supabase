// "use client";

import ManageAboutUs from "../../../../../(viewer)/[userId]/[entityId]/manageEntity/manageEntity-Components/ManageAboutUs";
import ManageContactUs from "../manageEntity-components/modals/ManageContactUs";
import ManageCoverPhotos from "../../../../../(viewer)/[userId]/[entityId]/manageEntity/manageEntity-Components/ManageCoverPhotos";
import ManageEntityMenu from "../../../../../(viewer)/[userId]/[entityId]/manageEntity/manageEntity-Components/ManageEntityLeftMenu";
import ManageSocialMedia from "../../../../../(viewer)/[userId]/[entityId]/manageEntity/manageEntity-Components/ManageSocialMedia";
import ManageTags from "../../../../../(viewer)/[userId]/[entityId]/manageEntity/manageEntity-Components/ManageTags";
import ManageWorkingHours from "../../../../../(viewer)/[userId]/[entityId]/manageEntity/manageEntity-Components/ManageWorkingHours";
import MobileDropdownManagement from "../../../../../(viewer)/[userId]/[entityId]/manageEntity/manageEntity-Components/MobileDropdownManagement";

export default function Home() {
  return (
    <>
      <div className="bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 pt-0 pb-7 sm:py-8">
        {/* PAGE BG COLOR AND PADDING  */}
        <div className="hidden sm:block font-bold text-2xl pt-6 pb-4">
          Manage Entity
        </div>
        <div className="flex">
          {/* LEFT MENU */}
          <ManageEntityMenu />

          {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

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
              <div className="bg-gray-500 opacity-95 h-14 fixed bottom-0 left-0 right-0 py-2 px-12 flex justify-end space-x-5">
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
      </div>
    </>
  );
}
