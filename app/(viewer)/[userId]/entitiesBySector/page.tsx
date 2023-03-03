import EntitiesCardsInGridDirection from "@/app/root-Components/entityCards-Components/EntitiesCardsInGridDirection";
import HomePageSearchBar from "@/app/root-Components/tools-Components/HomePageSearchBar";

export default function Home() {
  return (
    <>
      <div className="sm:h-fit sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        <div
          className="py-5 sm:py-8"
          style={{
            backgroundImage: `url(https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg)`,
          }}
        >
          {/* SEARCH BAR */}
          <HomePageSearchBar />
        </div>
        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        {/* LISTING OF ENTITIES */}
        <div className="py-5 sm:py-10 space-y-3 sm:space-y-5">
          {/* MOST POPULAR ENTITIES */}
          <div>
            {/* HEADER AND VIEW ALL BUTTON */}
            {/* NOT ABSTRACTING THIS DIV IN THE ROW COMPONENT BECAUSE THE ML-400PX VARIES BETWEEN THIS DIV AND SERVICE INDUSTRY DIV */}
            <div className="flex items-center justify-between pb-2 sm:pb-4">
              <p className="font-bold text-lg sm:ml-[520px]">
                Popular Entities
              </p>
            </div>
            <EntitiesCardsInGridDirection />
          </div>
          {/* /////////////////////////////////////////////////////////////////////////////////// */}
        </div>
      </div>
    </>
  );
}
