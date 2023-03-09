import getEntityInfos from "@/lib/get/getEntityInfos";
import ManageAboutUs from "../manageEntity-Components/ManageAboutUs";
import ManageContactUs from "../manageEntity-Components/ManageContactUs";
import ManageCoverPhotos from "../manageEntity-Components/ManageCoverPhotos";
import ManageSocialMedia from "../manageEntity-Components/ManageSocialMedia";
import ManageTags from "../manageEntity-Components/ManageTags";
import ManageWorkingHours from "../manageEntity-Components/ManageWorkingHours";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";

export default async function ManageEntityInfosPage({ params }) {
  //Fetching entity infos
  const entityInfos = await getEntityInfos(params.entityId);

  //Destructuring the entity tags to send them as props to ManageTags Component
  const entityTags = entityInfos.entity_tags;

  const aboutUsDescription = entityInfos.about_us_description;
  const contactUsDescription = entityInfos.contact_us_description;

  const socialMedia = {
    phone: entityInfos.entity_phone_number,
    email: entityInfos.entity_email,
    instagram: entityInfos.instagram_link,
    facebook: entityInfos.facebook_link,
    whatsapp: entityInfos.whatsapp_phone_number,
  };

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
          <ManageTags entityTags={entityTags} />
          <ManageWorkingHours />
          <ManageSocialMedia socialMedia={socialMedia} />
          <ManageAboutUs aboutUs_description={aboutUsDescription} />
          <ManageContactUs contactUs_description={contactUsDescription} />
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
    </>
  );
}
