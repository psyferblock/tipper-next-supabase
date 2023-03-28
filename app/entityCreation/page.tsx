"use client";

import { supabase } from "@/utils/supabase-browser";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import createEntity from "@/lib/create/createEntity";
import { useSupabase } from "@/app/supabase-provider";
import createMenuCategory from "@/lib/create/createMenuCategory";
import createExchangeRate from "@/lib/create/createExchangeRate";
import { getEntityTypes } from "@/lib/get/getEntityTypes";

export default function EntityCreationForm({ params }) {
  //States
  const [entityName, setEntityName] = useState<string | undefined>();
  const [entityAddress, setEntityAddress] = useState<string | undefined>();
  const [entityEmailAddress, setEntityEmailAddress] = useState<
    string | undefined
  >();
  const [entityPhoneNumber, setEntityPhoneNumber] = useState<
    number | undefined
  >();

  const [listOfEntityTypes, setListOfEntityTypes] = useState([]);
  const [entityTypeNameSelected, setEntityTypeNameSelected] = useState();

  //Error states
  const [entityNameIsNullError, setEntityNameIsNullError] = useState(false);
  const [entityAddressIsNullError, setEntityAddressIsNullError] =
    useState(false);
  const [entityEmailAddressIsNullError, setEntityEmailAddressIsNullError] =
    useState(false);
  const [entityPhoneNumberIsNullError, setEntityPhoneNumberIsNullError] =
    useState(false);

  useEffect(() => {
    setEntityNameIsNullError(false);
    setEntityAddressIsNullError(false);
    setEntityEmailAddressIsNullError(false);
    setEntityPhoneNumberIsNullError(false);
  }, [entityName, entityAddress, entityEmailAddress, entityPhoneNumber]);

  console.log("entityPhoneNumber", entityPhoneNumber);

  useEffect(() => {
    async function getTypes() {
      const response = await getEntityTypes();
      setListOfEntityTypes(response);
    }
    getTypes();
  }, []);

  const router = useRouter();

  const { session } = useSupabase();
  const userId = session?.user.id;

  //Functions
  async function handleCreateNowButton() {
    // Checking for Errors
    if (!entityName?.length) {
      setEntityNameIsNullError(true);
    } else if (!entityAddress?.length) {
      setEntityAddressIsNullError(true);
    } else if (!entityEmailAddress?.length) {
      setEntityEmailAddressIsNullError(true);
    } else if (!entityPhoneNumber) {
      setEntityPhoneNumberIsNullError(true);
    } else {
      // Creating the entity

      //Finding the entity type's id
      let entityTypeId;
      listOfEntityTypes.map((entityTypeObject) => {
        if (entityTypeObject.entity_type_name == entityTypeNameSelected) {
          entityTypeId = entityTypeObject.id;
        }
      });

      const arrOfTags = [entityTypeNameSelected];

      //Create the entity
      const response = await createEntity(
        userId,
        entityName,
        entityTypeId,
        entityAddress,
        entityEmailAddress,
        entityPhoneNumber,
        arrOfTags
      );

      const entityId = response.id;

      //Creating an exchange rate row in DB referring to the newly created entity
      await createExchangeRate(entityId, "1500");

      const firstMenuCategoryObject = await createMenuCategory(
        "Main",
        true,
        entityId
      );
      console.log("firstMenuCategoryObject", firstMenuCategoryObject);
      const firstMenuCategoryId = firstMenuCategoryObject.id;
      //Redirect user to either his entity page or message from tipper
      router.push(`${entityId}/menu/${firstMenuCategoryId}`);
    }
  }

  return (
    <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-0 py-5 sm:py-0">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className="w-1/3 mb-10 sm:mb-0 sm:py-5 sm:px-5">
          <Link href={`manageUserProfile`} className="flex items-center ">
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
            {/* CONDITIONAL ERROR MESSAGE */}
            {entityNameIsNullError && (
              <div className="text-red-500 text-xs sm:text-sm">
                Please enter a name.
              </div>
            )}
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
                  setEntityTypeNameSelected(e.target.value);
                }}
              >
                {listOfEntityTypes.map((entityTypeObject) => (
                  <option>{entityTypeObject.entity_type_name}</option>
                ))}
              </select>
            </div>
            {/* DIVIDOR SEPARATOR */}
            {/* <div className="divide-y"> */}
            {/* ENTITY ADDRESS */}
            <div className="space-y-1 mb-7">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Entity Address*
              </label>
              {/* ENTITY ADDRESS FIELD */}
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
            {/* CONDITIONAL ERROR MESSAGE */}
            {entityAddressIsNullError && (
              <div className="text-red-500 text-xs sm:text-sm">
                Please enter an address.
              </div>
            )}
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
            {/* CONDITIONAL ERROR MESSAGE */}
            {entityEmailAddressIsNullError && (
              <div className="text-red-500 text-xs sm:text-sm">
                Please enter an e-mail address.
              </div>
            )}
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
            {/* CONDITIONAL ERROR MESSAGE */}
            {entityPhoneNumberIsNullError && (
              <div className="text-red-500 text-xs sm:text-sm">
                Please enter a phone number.
              </div>
            )}
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
        </div>
      </div>
    </div>
    // </div>
  );
}
