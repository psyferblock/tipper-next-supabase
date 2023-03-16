//This is the layout of the entity page

import AboutUsSection from "@/app/root-Components/entityPage-Components/AboutUsSection";
import ContactUsSection from "@/app/root-Components/entityPage-Components/ContactUsSection";
import CoverPhotos from "@/app/root-Components/entityPage-Components/CoverPhotosSection";
import EntityInfosLeftContainer from "@/app/root-Components/entityPage-Components/EntityInfosLeftContainer";
import HighlightReels from "@/app/root-Components/entityPage-Components/HighlightsSection";
import OurMenuSection from "@/app/root-Components/entityPage-Components/OurMenuSection";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleManageEntityButton = (e) => {
    e.preventDefault();
    router.push("/management/menu");
  };

  return (
    <>
      <div className="flex items-center justify-between sm:hidden h-14 px-3 bg-gray-300 w-full z-50 fixed text-2xl font-bold">
        <p>Entity Name</p>
        <a
          href="/management/menu"
          className=" h-fit rounded-3xl mt-1 text-blue-500  text-xs"
        >
          Manage Entity
        </a>
      </div>
      <div className="h-14 sm:h-0"></div>

      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-12 py-3 sm:py-8">
        <div className="hidden sm:flex items-center justify-between pb-5 sm:pb-9">
          <p className=" font-semibold text-2xl ">Entity Name</p>
          <button
            onClick={handleManageEntityButton}
            className="sm:w-32 sm:h-9 h-fit rounded-3xl sm:border-2 sm:border-gray-500 text-blue-500 sm:text-gray-500 text-xs"
          >
            Manage Entity
          </button>
        </div>
        <div className="sm:flex sm:flex-row flex flex-col-reverse sm:space-x-5 sm:h-[496px] sm:mb-8">
          <EntityInfosLeftContainer />

          {/* EVERYTHING ON THE RIGHT OF THE LEFT COLUMN */}
          <div className="sm:h-[496px] sm:flex sm:flex-col justify-between sm:w-1/4 sm:grow">
            {/*  COVER PHOTOS CONTAINER */}
            <CoverPhotos />
            {/* HIGHLIGHTS CONTAINER */}
            <HighlightReels />
          </div>
        </div>

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* OUR MENU SECTION */}
        <OurMenuSection />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* GET IN TOUCH WITH US SECTION */}
        <ContactUsSection />

        {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

        {/* ABOUT US SECTION */}
        <AboutUsSection />
      </div>
    </>
  );
}
