import AboutUsSection from "@/app/root-Components/entityPage-Components/AboutUsSection";
import ContactUsSection from "@/app/root-Components/entityPage-Components/ContactUsSection";
import CoverPhotos from "@/app/root-Components/entityPage-Components/CoverPhotosSection";
import EntityInfosLeftContainer from "@/app/root-Components/entityPage-Components/EntityInfosLeftContainer";
import HighlightReels from "@/app/root-Components/entityPage-Components/HighlightReelsSection";
import Link from "next/link";
import ManageEntityButtonDesktop from "@/app/root-Components/entityPage-Components/ManageEntityDesktopButton";
import getEntityInfos from "@/lib/get/getEntityInfos";
import getReels from "@/lib/get/getReels";

export default async function EntityPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityId: number };
}) {
  //Fetching entity infos and passing them as props
  const entityInfos = await getEntityInfos(params.entityId);

  //Fetching reels and passing them as props
  const entityReels = await getReels(params.entityId);

  return (
    <>
      {/* MOBILE "MANAGE ENTITY" */}
      <div className="flex items-center justify-between sm:hidden h-14 px-3 bg-gray-300 w-full z-50 fixed text-2xl font-bold">
        <p>Entity Name</p>
        <Link
          href="1/1/manageEntity/entityInfo"
          className="h-fit rounded-3xl mt-1 text-blue-500 text-xs"
        >
          Manage Entity
        </Link>
      </div>
      {/* THIS DIV IS FOR MOBILE VERSION ONLY: EXTRA SPACE TO COMPENSATE FOR NAVBAR HEIGHT */}
      <div className="h-14 sm:h-0"></div>

      {/* DESKTOP "MANAGE ENTITY" */}
      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-12 py-3 sm:py-8">
        <div className="hidden sm:flex items-center justify-between pb-5 sm:pb-9">
          <p className="font-semibold text-2xl ">Entity Name</p>
          <ManageEntityButtonDesktop />
        </div>
        <div className="sm:flex sm:flex-row flex flex-col-reverse sm:space-x-5 sm:h-[496px] sm:mb-8">
          <EntityInfosLeftContainer entityInfos={entityInfos} />

          {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
          <div className="sm:h-[496px] sm:flex sm:flex-col justify-between sm:w-1/4 sm:grow">
            {/*  COVER PHOTOS CONTAINER */}
            <CoverPhotos />
            {/* HIGHLIGHTS CONTAINER */}
            <HighlightReels entityReels={entityReels} />
          </div>
        </div>

        {/* OUR MENU SECTION */}
        {children}

        {/* GET IN TOUCH WITH US SECTION */}
        <ContactUsSection
          description={entityInfos.contact_us_description}
          phoneNumber={entityInfos.entity_phone_number}
          pictureUrl={entityInfos.contact_us_picture_url}
        />

        {/* ABOUT US SECTION */}
        <AboutUsSection
          description={entityInfos.about_us_description}
          pictureUrl={entityInfos.about_us_picture_url}
        />
      </div>
    </>
  );
}
