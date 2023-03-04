//This is the Home Page

import EntitiesCardsInScrollRowDirection from "../app/root-Components/entityCards-Components/EntitiesCardsInScrollRowDirection";
import HomePageSearchBar from "../app/root-Components/tools-Components/HomePageSearchBar";

export default function Home() {
  const industries = [
    "Popular Entities",
    "Service Industry",
    "Arts & Entertainment",
    "Non-Profit",
  ];
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
        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        {/* LISTING OF ENTITIES */}
        <div className=" py-5 sm:py-10 space-y-5 sm:space-y-5">
          {industries.map((industry) => (
            <div>
              {/* MOBILE VERSION WITH FLEX */}
              <div className="sm:hidden flex items-center justify-between  pb-2 sm:pb-2">
                <p className="font-bold text-lg sm:text-center">{industry}</p>
                <a
                  className="text-sm text-blue-500 justify-end flex items-center sm:space-x-1"
                  href="/verticalEntities"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500 pt-0.5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
              {/* DESKTOP VERSION WITHOUT FLEX */}
              <div className="hidden sm:block pb-2">
                <p className="font-bold text-lg sm:text-center">{industry}</p>
                <a
                  className="text-sm text-blue-500 justify-end flex items-center sm:space-x-1"
                  href="/verticalEntities"
                >
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-blue-500 pt-0.5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
              <EntitiesCardsInScrollRowDirection />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
