import HomePageListingOfEntitiesCards from "@/app/root-Components/entityCards-Components/HomePageListingOfEntitiesCards";
import HomePageSearchBar from "@/app/root-Components/tools-Components/HomePageSearchBar";
import { getHighlightAndMediasServer } from "@/lib/get/getHiglightAndMedias";
import { createServerClient } from "@/utils/supabase-server";

export default async function TipperHomePage({ params }) {
  return (
    <>
      <div className="sm:h-fit sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        <div
          className="py-20 sm:py-32"
          style={{
            backgroundImage: `url(https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg)`,
          }}
        >
          {/* SEARCH BAR */}
          <HomePageSearchBar />
        </div>
        {/* LISTING OF ENTITIES */}
        <div className=" py-5 sm:py-10 space-y-5 sm:space-y-5">
          {/* @ts-expect-error Server Component */}
          <HomePageListingOfEntitiesCards />
        </div>
      </div>
    </>
  );
}
