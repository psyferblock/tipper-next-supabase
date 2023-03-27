"use client";
import { useAuthContext } from "@/app/context/Store";
import { useRouter } from "next/navigation";

export default function EntityPageHighlightsSection({ entityHighlights }) {
  // BOOLEAN TO DETERMINE WHETHER IT IS ADD HIGHLIGHT OR SHARE BUTTON NEXT TO HIGHLIGHTS
  const userIsOwner = true;
  // const listOfHighlights = [
  //   "Events",
  //   "Discounts",
  //   "Our Cookies",
  //   "Our Customers",
  //   "Our Customers",
  //   "Our Customers",
  //   "Our Customers",
  // ];

  const router = useRouter();

  const { userId, ownedEntityId } = useAuthContext();
  const handleAddHighlightButton = (e) => {
    e.preventDefault();
    router.push(`${userId}/${ownedEntityId}/manageEntity/highlights`);
  };
  return (
    <div className="flex sm:space-x-3">
      <div className="h-fit rounded-lg py-2 sm:drop-shadow-lg text-xs grid grid-rows-1 grid-flow-col gap-2 sm:gap-6 overflow-x-auto">
        {entityHighlights.map((highlight) => (
          <button className="truncate drop-shadow-lg sm:drop-shadow-none h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] rounded-full bg-white font-semibold ">
            {highlight.highlight_name}
          </button>
        ))}
      </div>

      <div className="h-fit sm:py-2">
        {userIsOwner && (
          <>
            {/* ADD HIGHLIGHT BUTTON IF USER IS ENTITY OWNER */}
            <button
              onClick={handleAddHighlightButton}
              className="h-[68px] sm:h-[116px] w-[68px] sm:w-[116px] my-2 sm:my-0 sm:py-10 rounded-full bg-white font-semibold sm:pb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-5 h-5 sm:w-10 sm:h-7 text-blue-500 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <div className="text-xs text-blue-500 pb-5">Add Highlight</div>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
