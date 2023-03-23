"use client";

<<<<<<< HEAD
import { useAuthContext } from "../../../context/Store";
=======
>>>>>>> f6fa4aaaf0f9f85cae5f257035fea6f563841eb4
import { supabase } from "@/utils/supabase-browser";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import createEntity from "@/lib/create/createEntity";
import { useSupabase } from "@/app/supabase-provider";
import createMenuCategory from "@/lib/create/createMenuCategory";

export default function EntityCreationForm({ params }) {
  //States
  const [entityName, setEntityName] = useState<string | undefined>();
  const [entityType, setEntityType] = useState<string | undefined>();
  const [entityAddress, setEntityAddress] = useState<string | undefined>();
  const [entityEmailAddress, setEntityEmailAddress] = useState<
    string | undefined
  >();
  const [entityPhoneNumber, setEntityPhoneNumber] = useState<
    number | undefined
  >();

  const router = useRouter();

  const { session } = useSupabase();
  const userId = session?.user.id;

  //Functions
<<<<<<< HEAD
  async function createEntity() {
    console.log("enterFunction");
    try {
      console.log("entered try block");

      const { data, error } = await supabase
        .from("entity")
        .insert({
          entity_name: entityName,
          entity_type: entityType,
          entity_address: entityLocation,
          owner_name: ownerName,
          entity_email: ownerEmailAddress,
          entity_phone_number: ownerContactNumber,
          owner_gender: ownerGender,
          user_id: userId,
          is_verified: false,
        })
        .select();

      if (error) throw error;
      const entityId = data[0].id;
      console.log("entityId", entityId);
      localStorage.setItem("entityId", JSON.stringify(entityId));
      router.push("1/1");
      console.log("response after entity creation", data);
    } catch (error) {
      if (error) {
        throw error;
      }
    }
=======
  async function handleCreateNowButton() {
    //Create the entity
    const response = await createEntity(
      userId,
      entityName,
      entityType,
      entityAddress,
      entityEmailAddress,
      entityPhoneNumber
    );
    const entityId = response.id;

    const firstMenuCategoryObject = await createMenuCategory("Main", entityId);
    console.log("firstMenuCategoryObject", firstMenuCategoryObject);
    const firstMenuCategoryId = firstMenuCategoryObject.id;
    //Redirect user to either his entity page or message from tipper
    router.push(`${userId}/${entityId}/menu/${firstMenuCategoryId}`);
>>>>>>> f6fa4aaaf0f9f85cae5f257035fea6f563841eb4
  }

  return (
    <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-0 py-5 sm:py-0">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className="w-1/3 mb-10 sm:mb-0 sm:py-5 sm:px-5">
          <Link
            href={`${params.userId}/manageUserProfile`}
            className="flex items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
            <div className="text-lg">Back</div>
          </Link>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        {/* RIGHT PART OF SCREEN */}
        <div className="bg-white grow sm:py-28 sm:px-40">
          <div className="mb-9 text-center sm:text-start">
            <div className="text-3xl font-bold ">Create an Entity</div>
            <div className="italic text-sm font-light">
              Welcome to the Tipper network
            </div>
          </div>
          {/* INPUT FORMS */}
          <div className="space-y-3">
            {/* BUSINESS NAME */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Entity Name*
              </label>
              {/* ENTITY NAME INPUT FIELD */}
              <input
                type="text"
                name="names"
                id="names"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Entity Name"
                onChange={(e) => {
                  setEntityName(e.target.value);
                }}
              />
            </div>
            {/* Entity TYPE */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Entity Type*
              </label>
              {/* BUSINESS TYPE FIELD */}
              <select
                name="business type"
                id="business type"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Select a type"
                onChange={(e) => {
                  setEntityType(e.target.value);
                }}
              >
                <option>Restaurant</option>
                <option>One-Stop Shop</option>
                <option>Clothing Shop</option>
                <option>Sex Shop</option>
                <option>Relief Therapy</option>
              </select>
            </div>
            {/* DIVIDOR SEPARATOR */}
            {/* <div className="divide-y"> */}
            {/* BUSINESS LOCATION */}
            <div className="space-y-1 mb-7">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Business Location*
              </label>
              {/* BUSINESS LOCATION FIELD */}
              <input
                type="text"
                name="names"
                id="names"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Area, Street Name, Building number"
                onChange={(e) => {
                  setEntityAddress(e.target.value);
                }}
              />
            </div>
            {/* BUSINESS OWNER NAME */}
            {/* <div className="space-y-1 pt-4">
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium"
                >
                  Business Owner*
                </label>
                <input
                  type="text"
                  name="names"
                  id="names"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="First and Last Name"
                  onChange={(e) => {
                    setOwnerName(e.target.value);
                  }}
                />
              </div>
            </div> */}
<<<<<<< HEAD
              {/* EMAIL ADDRESS */}
              <div className="space-y-1">
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium"
                >
                  Email Address*
                </label>
                {/* EMAIL ADDRESS INPUT FIELD */}
                <input
                  type="text"
                  name="EMAIL ADDRESS"
                  id="EMAIL ADDRESS"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="Email Address"
                  onChange={(e) => {
                    setOwnerEmailAddress(e.target.value);
                  }}
                />
              </div>
              {/* CONTACT NUMBER */}
              <div className="space-y-1">
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium"
                >
                  Contact Number*
                </label>
                {/* CONTACT NUMBER INPUT FIELD */}
                <input
                  type="number"
                  name="contact number"
                  id="contact number"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="Contact Number"
                  onChange={(e) => {
                    setOwnerContactNumber(e.target.valueAsNumber);
                  }}
                />
              </div>
=======
            {/* EMAIL ADDRESS */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Entity's Email Address*
              </label>
              {/* EMAIL ADDRESS INPUT FIELD */}
              <input
                type="text"
                name="EMAIL ADDRESS"
                id="EMAIL ADDRESS"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Entity Email Address"
                onChange={(e) => {
                  setEntityEmailAddress(e.target.value);
                }}
              />
            </div>
            {/* PHONE NUMBER */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Entity's Phone Number*
              </label>
              {/* CONTACT NUMBER INPUT FIELD */}
              <input
                type="number"
                name="contact number"
                id="contact number"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Entity's Phone Number"
                onChange={(e) => {
                  setEntityPhoneNumber(e.target.valueAsNumber);
                }}
              />
            </div>
>>>>>>> f6fa4aaaf0f9f85cae5f257035fea6f563841eb4

              {/* GENDER RADIO BUTTON */}
              {/* <div>
              <label
                htmlFor="gender"
                className="text-xs text-gray-600 font-medium"
              >
                Gender*
              </label>
              <div className="flex items-center flex-start space-x-9 py-1">
                <div>
                  <input
                    id="default-radio-1"
                    type="radio"
                    value={"Male"}
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                    onChange={(e) => {
                      setOwnerGender(e.target.value);
                    }}
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
                    value={"Female"}
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                    onChange={(e) => {
                      setOwnerGender(e.target.value);
                    }}
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
                    value={"Other"}
                    name="default-radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                    onChange={(e) => {
                      setOwnerGender(e.target.value);
                    }}
                  />
                  <label
                    htmlFor="default-radio-1"
                    className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                  >
                    Other
                  </label> */}
<<<<<<< HEAD
              {/* </div> */}
            </div>
          </div>
=======
            {/* </div> */}
            {/* </div> */}
          </div>
          {/* CREATE ENTITY BUTTON */}
          <button
            onClick={handleCreateNowButton}
            className="w-full h-10 mt-5 sm:mt-10 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm"
          >
            Create Now
          </button>
>>>>>>> f6fa4aaaf0f9f85cae5f257035fea6f563841eb4
        </div>
        {/* CREATE ENTITY BUTTON */}
        <button
          onClick={createEntity}
          className="w-full h-10 mt-5 sm:mt-10 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm"
        >
          Create Now
        </button>
      </div>
    </div>
    // </div>
  );
}
