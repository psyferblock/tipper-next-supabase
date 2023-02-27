"use client"

import EntityCard from "@/components/EntityCard";
import EntitiesCardsRow from "@/components/landing page/EntitiesCardsRow";
import { useGlobalContext } from "./Context/store";

export default function Home() {
  const { userId } = useGlobalContext();

  return (
    <>
      <div className="sm:h-fit sm:min-h-screen px-3 sm:px-12 py-5 sm:py-8">
        <div
          className="py-20 sm:py-32"
          style={{
            backgroundImage: `url(https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg)`,
          }}
        >
          {/* <img
          className=" w-full h-full"
          src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
          alt=""
        /> */}
          {/* SEARCH BAR */}
          <div className="bg-white border border-black  sm:w-7/12 sm:mx-auto flex sm:py-0 sm:px-3 rounded-full overflow-hidden">
            <div className="sm:col-span-3 border-r">
              <select
                id="sector"
                // autoComplete="country-name"
                className="truncate text-center text-xs sm:text-sm h-full block w-20 sm:w-52 border-0 bg-transparent sm:py-2 pr-5 sm:px-3 focus:border-0 focus:outline-none focus:ring-0 "
              >
                <option selected disabled hidden>
                  Sectors
                </option>
                <option>All</option>
                <option>Service Industry</option>
                <option>Arts & Entertainment</option>
                <option>Non-Profit</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Explore Entities"
              className="pl-2 sm:pl-9 sm:text-sm sm:focus:ring-0 bg-transparent w-full border-0 sm:h-12"
            />
            <button className="bg-blue-500 text-white px-3 sm:px-7 sm:-mr-3">
              Search
            </button>
          </div>
        </div>
        <div>{"id of the user baby",userId }</div>

        {/* /////////////////////////////////////////////////////////////////////////////////// */}
        {/* LISTING OF ENTITIES */}
        <div className=" py-5 sm:py-10 space-y-3 sm:space-y-5">
          {/* MOST POPULAR ENTITIES */}
          <div>
            {/* HEADER AND VIEW ALL BUTTON */}
            {/* NOT ABSTRACTING THIS DIV IN THE ROW COMPONENT BECAUSE THE ML-400PX VARIES BETWEEN THIS DIV AND SERVICE INDUSTRY DIV */}
            <div className="flex items-center justify-between pb-2 sm:pb-4">
              <p className="font-bold text-lg sm:ml-[520px]">
                Popular Entities
              </p>
              <a
                className="text-sm text-blue-500 flex items-center sm:space-x-1"
                href=""
              >
                View Popular
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
            {/* <EntitiesCardsRow /> */}
          </div>
          {/* /////////////////////////////////////////////////////////////////////////////////// */}

          {/* SERVICE INDUSTRY */}
          <div>
            {/* HEADER AND VIEW ALL BUTTON */}
            <div className="sm:pb-4">
              <div className="flex items-center justify-between pb-2">
                <p className="sm:flex font-bold text-lg sm:ml-[519px]">
                  Service Industry
                </p>
                <div>
                  <a
                    className="text-sm text-blue-500 flex items-center space-x-1"
                    href=""
                  >
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-500 pt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <EntitiesCardsRow /> */}
          </div>
          {/* /////////////////////////////////////////////////////////////////////////////////// */}

          {/* ART AND ENTERTAINMENT INDUSTRY */}
          <div>
            {/* HEADER AND VIEW ALL BUTTON */}
            <div className="sm:pb-4">
              <div className="flex items-center justify-between  pb-2">
                <p className="sm:flex font-bold text-lg sm:ml-[500px]">
                  Art & Entertainment
                </p>
                <div>
                  <a
                    className="text-sm text-blue-500 flex items-center space-x-1"
                    href=""
                  >
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-500 pt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <EntitiesCardsRow /> */}
          </div>

          {/* /////////////////////////////////////////////////////////////////////////////////// */}

          {/* NON PROFIT INDUSTRY */}
          <div>
            {/* HEADER AND VIEW ALL BUTTON */}
            <div className="sm:pb-4">
              <div className="flex items-center justify-between pb-2">
                <p className="sm:flex font-bold text-lg sm:ml-[543px]">
                  Non-Profit
                </p>
                <div>
                  <a
                    className="text-sm text-blue-500 flex items-center space-x-1"
                    href=""
                  >
                    View All
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-blue-500 pt-0.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* <EntitiesCardsRow /> */}
          </div>
        </div>
      </div>
    </>
  );
}
