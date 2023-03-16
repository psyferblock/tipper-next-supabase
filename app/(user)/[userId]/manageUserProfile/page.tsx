import { getMyUserInfosServer } from "@/lib/get/getMyUserInfos";
import Link from "next/link";
import ActivitiesHistory from "./manageUserProfile-Components/ActivitiesHistory";
import SecuritySection from "./manageUserProfile-Components/SecuritySection";
import BasicInfosSection from "./manageUserProfile-Components/BasicInfosSection";
import { getFirstMenuCategoryIdServer } from "@/lib/get/getFirstMenuCategoryId";
import { createServerClient } from "@/utils/supabase-server";

export default async function ManageUserProfilePage({ params }) {
  const userOwnsEntity = true;

  const userId = "506c2ec0-c45d-4105-b27e-f321e81eed32";
  const entityId = "a7fb29ed-3b7a-452b-a284-ae2a2dff14bb";

  const supabase = createServerClient();
  //Getting a user's profile information
  const userInfos = await getMyUserInfosServer(supabase, userId);

  //Fetching the name of the first menu category to include in URL in case user accesses his entity
  const firstMenuCategoryId = await getFirstMenuCategoryIdServer(
    supabase,
    entityId
  );

  return (
    <>
      <p className="h-14 pl-3 sm:pl-16 sm:h-fit pt-3 sm:pt-6 sm:mt-0 sm:pb-5 bg-gray-300 w-full z-50 sm:z-0 fixed sm:relative sm:mb-0 text-2xl sm:text-2xl font-bold sm:font-bold">
        Profile
      </p>
      <div className="h-14 sm:h-0"></div>
      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-12 py-2 sm:py-8">
        <div className="space-y-8 ">
          <div className=" sm:flex sm:flex-col space-y-5 sm:space-y-5 sm:px-[155px]">
            {/* CREATE ENTITY CONTAINER */}
            <div className="bg-white drop-shadow-lg rounded-lg sm:rounded-lg sm:h-fit sm:w-fit pt-2  pb-3  sm:py-5 px-4 sm:px-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:flex-col pb-3 sm:pb-0">
                  <div className=" sm:pb-2 sm:font-semibold text-xl sm:text-xl sm:grow">
                    Create an Entity
                  </div>
                  <p className="sm:font-normal text-sm sm:text-xs sm:w-8/12">
                    Lorem ipsum blablabla however you would like to create your
                    entiy you can for the best of your ability to tule the world
                    and the heavens and then all the kingdom.
                  </p>
                </div>

                {/* ACCESS OR CREATE ENTITY BUTTON */}
                {userOwnsEntity ? (
                  <button className="bg-blue-500 text-white w-fit px-5 sm:w-48 h-10 sm:h-10 rounded-3xl sm:rounded-3xl sm:text-sm sm:hover:bg-blue-600">
                    <Link
                      href={`${userId}/${entityId}/menu/${firstMenuCategoryId}`}
                    >
                      Access My Entity
                    </Link>
                  </button>
                ) : (
                  <button className="bg-blue-500 text-white w-fit px-5  sm:w-40 h-10 sm:h-10 rounded-3xl sm:rounded-3xl sm:text-sm sm:hover:text-base">
                    <Link href={`${params.userId}/entityCreation`}>
                      Create Now
                    </Link>
                  </button>
                )}
              </div>
            </div>

            {/* BASIC INFO CONTAINER */}
            <BasicInfosSection userInfos={userInfos} />

            {/* SECURITY SECTION */}
            <SecuritySection />

            {/* CREATE ENTITY CONTAINER */}
            <ActivitiesHistory />
          </div>
        </div>
      </div>
    </>
  );
}
