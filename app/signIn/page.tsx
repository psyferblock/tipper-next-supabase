"use client";
import { supabase } from "@/utils/supabase-browser";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSupabase } from "../supabase-provider";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

// import dynamic from "next/dynamic";

export default function SignInPage() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [open, setOpen] = useState(false);

  const [signInFailedError, setSignInFailedError] = useState(false);

  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    setSignInFailedError(false);
  }, [email, password]);

  async function handleSignInButton() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    //Check if sign in was successful
    if (error) {
      setSignInFailedError(true);
    } else {
      const userId = data;
      console.log("data after sign in", userId);
      router.back();
    }
  }

  // const { session } = useSupabase();
  // console.log("session in sign in page:", session);

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
        <div className="bg-white grow sm:py-28 sm:px-40 sm:h-screen h-fit">
          <div className="mb-9 text-center sm:text-start">
            <div className="text-3xl font-bold ">Sign In</div>
            <div className="italic text-sm font-light">
              Welcome back to the network
            </div>
          </div>
          {/* INPUT FORMS */}
          <div className="space-y-3">
            {signInFailedError && (
              <div className="text-red-500 text-xs sm:text-sm">
                The e-mail and password you entered do not match.
              </div>
            )}
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
                htmlFor="password"
                className="text-xs text-gray-600 font-medium"
              >
                Password*
              </label>
              {/* PASSWORD INPUT FIELD */}
              <div className="w-full relative">
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
          </div>

          {/* SIGN IN BUTTON */}
          <button
            className="w-full h-10 mt-8 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm"
            onClick={handleSignInButton}
          >
            Sign In
          </button>
          <div className="flex items-center justify-center mt-3 space-x-1">
            <div> Don't have an account?</div>
            <Link
              href="signUp"
              className="underline hover:text-blue-600 font-semibold"
            >
              Sign Up Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* // export default dynamic(() => Promise.resolve(SignIn), { ssr: false }); */
}
