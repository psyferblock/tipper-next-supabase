"use client";

import updateBasicUserInfos from "@/lib/updateBasicUserInfos";
import { useState } from "react";

export default function BasicInfosSection({ userInfos }) {
  const [fullName, setFullName] = useState(
    `${userInfos.first_name} ${userInfos.last_name}`
  );
  const [dateOfBirth, setDateOfBirth] = useState(userInfos.date_of_birth);
  const [gender, setGender] = useState(userInfos.gender);
  const [contactNumber, setContactNumber] = useState(userInfos.phone_number);
  //   const [photo , setPhoto] = useState()

  //Variable representing if the user is editing the section or not
  const [editing, setEditing] = useState(false);

  async function onSaveButtonClick() {
    const res = await updateBasicUserInfos(
      userInfos.user_id,
      fullName,
      dateOfBirth,
      gender,
      contactNumber
    );
    setEditing(false);
  }
  return (
    <div className="bg-white drop-shadow-lg sm:h-fit sm:w-full rounded-lg sm:rounded-lg pt-2 pb-3 sm:py-4 px-4 sm:px-6">
      <div className="flex sm:flex sm:items-center sm:justify-between pb-3 sm:pb-4">
        <p className="font-bold sm:font-bold text-lg sm:text-lg grow ">
          Basic Information
        </p>
        {editing ? (
          <button
            onClick={onSaveButtonClick}
            className="text-blue-500 sm:pt-0 sm:text-xs "
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="text-blue-500 sm:pt-0 sm:text-xs "
          >
            Edit
          </button>
        )}
      </div>
      <div className="sm:flex space-y-4 sm:space-x-12">
        <div className="mx-auto w-1/2 sm:w-2/12">
          <img
            className="inline-block mb-2 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-blue-500 flex sm:flex justify-center sm:justify-center space-x-[3px] sm:space-x-[0.6px] text-xs sm:text-xs  ">
            <button disabled={!editing}>Change photo</button>
            <span>|</span> <button disabled={!editing}>Delete</button>
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
              id="names"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Enter First and Last Name"
              disabled={!editing}
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
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="h-12 text-gray-600 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Enter Date of Birth"
              disabled={!editing}
            />
          </div>
        </div>
        <div className="sm:w-5/12">
          <label htmlFor="gender" className="text-xs text-gray-600 font-medium">
            Gender*
          </label>
          <div className="sm:space-y-6">
            <div className="flex items-center flex-start space-x-9 py-2">
              <div>
                <input
                  id="default-radio-1"
                  type="radio"
                  value={"Male"}
                  checked={gender == "Male"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  disabled={!editing}
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
                  checked={gender == "Female"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  disabled={!editing}
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
                  value={"Neutral"}
                  checked={gender == "Neutral"}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-100 dark:border-gray-600"
                  disabled={!editing}
                />
                <label
                  htmlFor="default-radio-1"
                  className="ml-2 text-xs font-normal text-gray-900 dark:text-gray-500"
                >
                  Neutral
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
                id="contactNumber"
                value={contactNumber}
                onChange={(e) => {
                  setContactNumber(e.target.value);
                }}
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12  focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Enter Number"
                disabled={!editing}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
