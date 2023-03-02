
"use client"

import { useState, useEffect } from "react";
import { supabase } from "utils/supabase";

export default function signUpPage() {
  const [password, setPassword] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();

  async function signUpWithEmail() {
    try {
      if (email && password) {
        const response = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (response.error) throw response.error;
        const userId = await response.data.user?.id;
        const userProfileTable=await supabase
            .from("user_profile")
            .insert({user_id:userId})
            .select()

      }
      console.log('userProfileTable', userProfileTable)
    } catch (error) {}
  }
  return (
    <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-0 py-5 sm:py-0">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className="sm:w-1/3 mb-10 sm:mb-0 sm:py-5 sm:px-5">
          <button className="flex items-center ">
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
            <p className="text-lg">Back</p>
          </button>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        {/* RIGHT PART OF SCREEN */}
        <div className="bg-white grow sm:py-28 sm:px-40">
          <div className="mb-7 text-center sm:text-start">
            <p className="text-3xl font-bold">Sign Up</p>
            <p className="italic text-sm font-light">
              A step closer to the network
            </p>
          </div>
          {/* INPUT FORMS */}
          <div className="space-y-3">
            BUSINESS NAME
            {/* DATE OF BIRTH */}
            {/* GENDER RADIO BUTTON */}
            {/* CONTACT NUMBER */}
            {/* DIVIDOR SEPARATOR */}
            <div className="divide-y">
              {/* USER LOCATION */}

              {/* EMAIL ADDRESS */}
              <div className="space-y-1 pt-4">
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
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </div>
            {/* EMAIL ADDRESS INPUT FIELD */}
            <input
              type="text"
              id="PASSWORD"
              className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {/* PASSWORD */}
          <div className="space-y-1">
            <label
              htmlFor="names"
              className="text-xs text-gray-600 font-medium"
            >
              Password*
            </label>
            <input
              type="text"
              id="CONFIRM PASSWORD"
              className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
              placeholder="Confirm Password"
            />
            {/* CONFIRM PASSWORD */}
          </div>
          {/* CREATE ENTITY BUTTON */}
          <button
            className="w-full h-10 mt-5 sm:mt-10 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm"
            onClick={signUpWithEmail}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
