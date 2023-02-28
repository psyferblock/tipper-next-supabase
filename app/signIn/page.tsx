"use client";
import supabase from "@/utils/supabase";
import { useState } from "react";
import { useAuthContext } from "../Store";
import { useRouter } from "next/navigation";

// import dynamic from "next/dynamic";

export default function Home() {
  const [password, setPassword] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const { userId, setUserId } = useAuthContext();

  const router = useRouter();

  const handleBackButton = () => {
    router.push("/");
  };

  console.log("userId on sign in page:", userId);

  async function signInWithEmail() {
    try {
      if (email && password) {
        const response = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        });
        if (response.error) throw response.error;
        const responseId = await response.data.user?.id;
        localStorage.setItem("user", JSON.stringify(responseId));
        console.log("userId on sign in", responseId);
        setUserId(responseId);
      }
    } catch (error) {
      if (error) {
        throw error;
      }
    }
  }

  return (
    <div className="sm:h-fit sm:min-h-screen sm:px-0 px-3 py-5 sm:py-0">
      <div className="sm:flex">
        {/* LEFT PART OF SCREEN */}
        <div className="sm:w-1/3 sm:mt-5 mb-10 sm:px-5">
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
            <div className="text-lg">Back</div>
          </button>
        </div>
        {/* //////////////////////////////////////////////////////////////////////////////////// */}
        {/* RIGHT PART OF SCREEN */}
        <div className="bg-white grow sm:py-28 sm:px-40">
          <div className="mb-9 text-center sm:text-start">
            <div className="text-3xl font-bold ">Sign In</div>
            <div className="italic text-sm font-light">
              Welcome back to the network
            </div>
          </div>
          {/* INPUT FORMS */}
          <div className="space-y-3">
            {/* EMAIL ADDRESS */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Email Address*
              </label>
              {/* ENTITY EMAIL INPUT FIELD */}
              <input
                type="text"
                id="Email Address*"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Email Address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {/* PASSWORD INPUT */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Password*
              </label>
              {/* PASSWORD INPUT FIELD */}
              <input
                type="text"
                id="Password"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          {/* SIGN IN BUTTON */}
          <button
            className="w-full h-10 mt-8 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm"
            onClick={signInWithEmail}
          >
            Sign In
          </button>
          <div className="flex items-center justify-center mt-3 space-x-1">
            <div> Don't have an account?</div>
            <a
              href="signUp"
              className="underline hover:text-blue-600 font-semibold"
            >
              Sign Up Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default dynamic(() => Promise.resolve(SignIn), { ssr: false });
