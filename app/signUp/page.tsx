"use client";
import createUserProfile from "@/lib/create/createUserProfile";
import { supabase } from "@/utils/supabase-browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function SignUpPage() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [confirmPassword, setConfirmPassword] = useState<string | undefined>();

  //for the open and close the eye
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };
   // handle toggle
   const toggle2 = () => {
    setConfirmOpen(!confirmOpen);
  };


  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  async function handleSignUpButton() {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) throw error;
    const userId = data.user?.id;
    console.log("userId after sign up", userId);
    if(password!=confirmPassword){
      alert("passwords are not aligned");

    }
    if (password === confirmPassword) {
      await createUserProfile(userId, email);
      router.back();
    }
  }
  return (
    <div className=" sm:h-fit sm:min-h-screen px-3 sm:px-0 py-5 sm:py-0">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className="sm:w-1/3 mb-10 sm:mb-0 sm:py-5 sm:px-5">
          <button onClick={handleBackButton} className="flex items-center ">
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
            {/* EMAIL ADDRESS */}
            <div className="space-y-1 pt-4">
              <label
                htmlFor="email"
                className="text-xs text-gray-600 font-medium"
              >
                Email Address*
              </label>
              {/* EMAIL ADDRESS INPUT FIELD */}
              <input
                type="text"
                name="email"
                id="email"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-xs text-gray-600 font-medium"
              >
                Password*
              </label>
              {/* EMAIL ADDRESS INPUT FIELD */}
              <div className="w-4/5 mx-auto mt-52 relative md:w-2/5">
                <input
                  type={open === false ? "password" : "text"}
                  id="password"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="Enter Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="text-2xl absolute top-4 right-5">
                  {open === false ? (
                    <AiFillEye onClick={toggle} />
                  ) : (
                    <AiFillEyeInvisible onClick={toggle} />
                  )}
                </div>
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* CONFIRM PASSWORD */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Confirm Password*
              </label>
              {/* CONFIRM PASSWORD  INPUT FIELD */}
              <div className="w-4/5 mx-auto mt-52 relative md:w-2/5">
                <input
                  type={confirmOpen === false ? "password" : "text"}
                  id="CONFIRM PASSWORD"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="Confirm Password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                />
                <div className="text-2xl absolute top-4 right-5">
                  {confirmOpen === false ? (
                    <AiFillEye onClick={toggle2} />
                  ) : (
                    <AiFillEyeInvisible onClick={toggle2} />
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* SIGN UP BUTTON */}

          <button
            onClick={handleSignUpButton}
            className="w-full h-10 mt-5 sm:mt-10 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
