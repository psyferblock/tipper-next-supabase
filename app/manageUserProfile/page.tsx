import { getMyUserInfosServer } from "@/lib/get/getMyUserInfos";
import Link from "next/link";
import ActivitiesHistory from "./manageUserProfile-Components/ActivitiesHistory";
import SecuritySection from "./manageUserProfile-Components/SecuritySection";
import BasicInfosSection from "./manageUserProfile-Components/BasicInfosSection";
import { getFirstMenuCategoryIdServer } from "@/lib/get/getFirstMenuCategoryId";
import { createServerClient } from "@/utils/supabase-server";
import getEntityOfUserServer from "@/lib/get/getEntityOfUser";
import { getMenuCategoriesServer } from "@/lib/get/getMenuCategories";

export default async function ManageUserProfilePage({ params }) {
  //Getting the session from the cookies
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const userId = session?.user.id;

  console.log("FINALLLYYYY", session);
  //Getting a user's profile information
  const userInfos = await getMyUserInfosServer(supabase, userId);
  console.log("userInfos", userInfos);

  let userOwnsEntity;
  let entityOwnedId;
  let firstMenuCategoryId;
  //Checking if user owns entity
  const response = await getEntityOfUserServer(supabase, userId);
  if (response) {
    userOwnsEntity = true;
    entityOwnedId = response.id;

    //Fetching the name of the first menu category to include in URL in case user accesses his entity
    const menuCategories = await getMenuCategoriesServer(
      supabase,
      entityOwnedId
    );

    firstMenuCategoryId = menuCategories[0]?.id;
  }

  return (
    <>
      <div className="h-14 pl-3 sm:pl-16 sm:h-fit pt-3 sm:pt-6 sm:mt-0 sm:pb-5 bg-gray-300 w-full z-50 sm:z-0 fixed sm:relative sm:mb-0 text-2xl sm:text-2xl font-bold sm:font-bold">
        Profile
      </div>
      <div className="h-14 sm:h-0"></div>
      <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-12 py-2 sm:py-8">
        <div className="space-y-8 ">
          <div className=" sm:flex sm:flex-col space-y-5 sm:space-y-5 sm:px-[155px]">
            {/* CREATE ENTITY CONTAINER */}
            <div className="bg-white drop-shadow-lg rounded-lg sm:rounded-lg sm:h-fit sm:w-fit pt-2  pb-3  sm:py-5 px-4 sm:px-6">
              <div className="sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:flex-col pb-3 sm:pb-0">
                  {userOwnsEntity ? (
                    <>
                      <div className=" sm:pb-2 sm:font-semibold text-xl sm:text-xl sm:grow">
                        Access Your Entity
                      </div>
                      <div className="sm:font-normal text-sm sm:text-xs sm:w-8/12">
                        Lorem ipsum blablabla however you would like to create
                        your entiy you can for the best of your ability to tule
                        the world and the heavens and then all the kingdom.
                      </div>
                    </>
                  ) : (
                    <>
                      <div className=" sm:pb-2 sm:font-semibold text-xl sm:text-xl sm:grow">
                        Create an Entity
                      </div>
                      <div className="sm:font-normal text-sm sm:text-xs sm:w-8/12">
                        Lorem ipsum blablabla however you would like to create
                        your entiy you can for the best of your ability to tule
                        the world and the heavens and then all the kingdom.
                      </div>
                    </>
                  )}
                </div>

                {/* ACCESS OR CREATE ENTITY BUTTON */}
                {userOwnsEntity ? (
                  <button className="bg-blue-500 text-white w-fit px-5 sm:w-48 h-10 sm:h-10 rounded-3xl sm:rounded-3xl sm:text-sm sm:hover:bg-blue-600">
                    <Link href={`${entityOwnedId}/menu/${firstMenuCategoryId}`}>
                      Access My Entity
                    </Link>
                  </button>
                ) : (
                  <button className="bg-blue-500 text-white w-fit px-5  sm:w-40 h-10 sm:h-10 rounded-3xl sm:rounded-3xl sm:text-sm sm:hover:text-base">
                    <Link href={`entityCreation`}>Create Now</Link>
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
