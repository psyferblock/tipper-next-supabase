import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleBackButton = () => {
    router.push("/signIn");
  };
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
            {/* BUSINESS NAME */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                First and Last Name*
              </label>
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

              {/* ENTITY NAME INPUT FIELD */}
              <input
                type="text"
                name="names"
                id="names"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="First and Last Name"
              />
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* DATE OF BIRTH */}
            <div className="space-y-1">
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
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* GENDER RADIO BUTTON */}
            <div>
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
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

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
                type="text"
                name="contact number"
                id="contact number"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Contact Number"
              />
            </div>
            {/* DIVIDOR SEPARATOR */}
            <div className="divide-y">
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

              {/* USER LOCATION */}
              <div className="space-y-1 mb-7">
                <label
                  htmlFor="names"
                  className="text-xs text-gray-600 font-medium"
                >
                  Your Location*
                </label>
                {/* USER LOCATION FIELD */}
                <select
                  id="user location"
                  className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                  placeholder="Select a location"
                >
                  <option>Beirut</option>
                  <option>Greater Beirut Area</option>
                  <option>Greater Universe Area</option>
                  <option>Grand Theft Auto Area</option>
                  <option>Ma khassak</option>
                </select>
              </div>
              {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
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
                />
              </div>
            </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* PASSWORD */}
            <div className="space-y-1">
              <label
                htmlFor="names"
                className="text-xs text-gray-600 font-medium"
              >
                Password*
              </label>
              {/* EMAIL ADDRESS INPUT FIELD */}
              <input
                type="text"
                id="PASSWORD"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Enter Password"
              />
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
              <input
                type="text"
                id="CONFIRM PASSWORD"
                className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mb-3 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          {/* CREATE ENTITY BUTTON */}
          <button className="w-full h-10 mt-5 sm:mt-10 hover:bg-blue-600 hover:text-lg rounded-3xl bg-blue-500 text-white text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
