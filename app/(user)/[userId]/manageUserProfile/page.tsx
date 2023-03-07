"use client";

//we want to this component to be client side because a user can edit his personal information,
//so we will need to use state management to send his changes to the DB

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ManageUserProfilePage({ params }) {
  const router = useRouter();

  const userOwnsEntity = false;

  const handleCreateNowButton = () => {
    router.push(`${params.userId}/entityCreation`);
  };
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
                    Access My Entity
                  </button>
                ) : (
                  <button
                    onClick={handleCreateNowButton}
                    className="bg-blue-500 text-white w-fit px-5  sm:w-40 h-10 sm:h-10 rounded-3xl sm:rounded-3xl sm:text-sm sm:hover:text-base"
                  >
                    Create Now
                  </button>
                )}
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* BASIC INFO CONTAINER */}
            <div className="bg-white drop-shadow-lg sm:h-fit sm:w-full rounded-lg sm:rounded-lg pt-2 pb-3 sm:py-4 px-4 sm:px-6">
              <div className="flex sm:flex sm:items-center sm:justify-between pb-3 sm:pb-4">
                <p className="font-bold sm:font-bold  text-lg sm:text-lg grow">
                  Basic Information
                </p>
                <button className="text-blue-500 sm:pt-0 sm:text-xs ">
                  Edit
                </button>
              </div>
              <div className="sm:flex space-y-4 sm:space-x-12">
                <div className="mx-auto w-1/2 sm:w-2/12">
                  <img
                    className="inline-block mb-2 rounded-full ring-2 ring-white"
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="text-blue-500 flex sm:flex justify-center sm:justify-center space-x-[3px] sm:space-x-[0.6px] text-xs sm:text-xs  ">
                    <button>Change photo </button>
                    <span>|</span> <button>Delete</button>
                  </div>
                </div>
                <div className="sm:w-5/12 sm:h-full space-y-3 sm:space-y-3">
                  <div className="space-y-1 sm:space-y-1">
                    <label
                      htmlFor="names"
                      className="text-xs text-gray-600 font-medium pb-5"
                    >
                      First and Last Name*
                    </label>
                    {/* FIRST AND LAST NAME INPUT FIELD */}
                    <input
                      type="text"
                      name="names"
                      id="names"
                      className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                      placeholder="Enter First and Last Name"
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-1">
                    <label
                      htmlFor="names"
                      className="text-xs text-gray-600 font-medium pb-3"
                    >
                      Date of birth*
                    </label>
                    {/* DATE OF BIRTH INPUT FIELD */}
                    <input
                      type="date"
                      name="dateofbirth"
                      id="dateofbirth"
                      className="h-12 text-gray-600 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                      placeholder="Enter Date of Birth"
                    />
                  </div>
                </div>
                <div className="sm:w-5/12">
                  <label
                    htmlFor="gender"
                    className="text-xs text-gray-600 font-medium"
                  >
                    Gender*
                  </label>
                  <div className="sm:space-y-6">
                    <div className="flex items-center flex-start space-x-9 py-2">
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                        >
                          Male
                        </label>
                      </div>
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                        >
                          Female
                        </label>
                      </div>
                      <div>
                        <input
                          id="default-radio-1"
                          type="radio"
                          value=""
                          name="default-radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                        />
                        <label
                          htmlFor="default-radio-1"
                          className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                        >
                          Other
                        </label>
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-1">
                      <label
                        htmlFor="names"
                        className="text-xs text-gray-600 font-medium"
                      >
                        Contact Number*
                      </label>
                      {/* FIRST AND LAST NAME INPUT FIELD */}
                      <input
                        type="number"
                        name="names"
                        id="names"
                        className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12  focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                        placeholder="Enter Number"
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="h-fit bg-white rounded-lg sm:rounded-lg pt-2 pb-3 sm:py-4 drop-shadow-lg px-4 sm:px-6">
              <div
                className="font-bold sm:font-semibold
                text-lg sm:text-lg sm:pb-2"
              >
                Security
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <div className="mr-4 space-y-1">
                    <label
                      htmlFor="names"
                      className="text-xs text-gray-600 font-medium"
                    >
                      Current Password
                    </label>
                    {/* FIRST AND LAST NAME INPUT FIELD */}
                    <div className="flex space-x-3 sm:space-x-6">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        className="h-12  block rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                        placeholder="Password"
                      />
                      <button className="text-xs text-blue-500 mb-3 font-medium">
                        Change
                      </button>
                      {/* <button className="text-xs text-blue-500 mb-3 font-medium">
                        Save
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CREATE ENTITY CONTAINER */}
            <div className="h-fit bg-white rounded-lg sm:rounded-lg pt-2  pb-3 sm:py-4 drop-shadow-lg px-4 sm:px-6">
              <p className="font-bold sm:font-bold text-lg sm:text-lg sm:pb-2">
                Activities History
              </p>
              <div className="divide-y space-y-2">
                <div className="sm:flex space-y-1 justify-between pt-2">
                  <p className="text-xs">
                    You just created a new menu category, "Discounts" for your
                    entity "Meshmosh"
                  </p>
                  <p className="text-xs text-gray-500">10-06-2023</p>
                </div>
                <div className="sm:flex  space-y-1 justify-between pt-2">
                  <p className="text-xs">
                    You added a link to you Instagram page on your entity's page
                    "Meshomosh"
                  </p>
                  <p className="text-xs text-gray-500">10-06-2023</p>
                </div>
                <div className="sm:flex space-y-1 justify-between pt-2">
                  <p className="text-xs">
                    You added a new highlight reel on your entity's page
                    "Meshmosh"
                  </p>
                  <p className="text-xs text-gray-500">10-03-2023</p>
                </div>
                <div className="sm:flex space-y-1 justify-between pt-2">
                  <p className="text-xs">
                    You published your entity "Meshmosh" on Tipper
                  </p>
                  <p className="text-xs text-gray-500">22-01-2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
