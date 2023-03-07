import EntitiesCardsInScrollRowDirection from "./EntitiesCardsInScrollRowDirection";
import Link from "next/link";
import supabase from "@/utils/supabase";

export default async function HomePageListingOfEntitiesCards(props) {
  //API Call
  let { data, error } = await supabase.from("entity").select("*");
  if (error) throw error;
  const listOfEntities = data;

  const industries = [
    {
      name: "Popular Entities",
      id: 0,
    },
    {
      name: "Service Industry",
      id: 1,
    },
    {
      name: "Non-Profit",
      id: 2,
    },
    {
      name: "Arts & Entertainment",
      id: 3,
    },
  ];

  console.log("props list:", props.listOfEntities);
  return (
    <>
      {industries.map((industry) => (
        <div>
          {/* MOBILE VERSION WITH FLEX */}
          <div className="sm:hidden flex items-center justify-between  pb-2 sm:pb-2">
            <p className="font-bold text-lg sm:text-center">{industry.name}</p>
            <Link
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
            </Link>
          </div>
          {/* DESKTOP VERSION WITHOUT FLEX */}
          <div className="hidden sm:block pb-2">
            <p className="font-bold text-lg sm:text-center">{industry.name}</p>
            <Link
              className="text-sm text-blue-500 justify-end flex items-center sm:space-x-1"
              href={`${props.userId}/entitiesBySector`}
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
            </Link>
          </div>
          <EntitiesCardsInScrollRowDirection
            listOfEntities={listOfEntities}
            industryId={industry.id}
          />
        </div>
      ))}
    </>
  );
}
