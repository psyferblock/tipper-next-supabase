export default function Home() {
  return (
    <div className=" bg-white rounded-lg mb-5 sm:mb-0 py-4 drop-shadow-xl px-3 sm:px-6 flex-none sm:w-[307px]">
      <div className="font-semibold flex justify-between flex-col space-y-3 sm:space-y-4">
        {/* ENTITY TAGS DIV */}
        <div>
          <p>Entity Tags</p>
          <div className="grid grid-rows-2 grid-flow-col gap-2 sm:gap-2 sm:pb-3 pb-3 pt-2 sm:pt-2 overflow-auto">
            <p className="w-fit  mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
              Homemade
            </p>

            <p className="w-fit mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
              Lebanese
            </p>

            <p className="w-fit  mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
              Mouneh
            </p>
            <p className="w-fit mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
              Vegetarian
            </p>
            <p className="w-fit  mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
              Labneh
            </p>
            <p className="w-fit  mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
              Cheese
            </p>
            <p className="w-fit  mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
              Mouhamara
            </p>
          </div>
          {/* LEFT RIGHT NAVIGATION BUTTON */}
          <div className="hidden sm:flex justify-end space-x-1 pr-1">
            <button>
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
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
            <button>
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
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* OPENING HOURS DIV */}
        <div>
          <p className="sm:pb-0.5 -mt-3 sm:-mt-5">Opening Hours</p>
          <div className="sm:px-1 divide-y">
            <div className="flex justify-between">
              <p className="font-normal text-xs">Monday-Friday</p>
              <p className="font-normal text-xs">8:00A.M-10:00P.M</p>
            </div>
            <div className="flex justify-between">
              <p className="font-normal text-xs">Saturday-Sunday</p>
              <p className="font-normal text-xs">8:00A.M-5:00P.M</p>
            </div>
          </div>
        </div>
        {/* ADDRESS DIV */}
        <div>
          <p>Address</p>
          <div className="sm:px-1">
            <p className="font-normal text-xs">
              Badaro, Main Street, Building 12
            </p>
            {/* GOOGLE MAPS */}
            <div className="bg-gray-200 h-32 rounded-lg"></div>
          </div>
        </div>

        {/* CONNECT WITH US DIV */}
        <div>
          <p className="pb-0.5">Connect With Us</p>
          <div className="sm:px-1 space-y-2">
            <p className="font-normal text-xs flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-0.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p>71 658 235</p>
            </p>
            <div className="flex items-center space-x-2">
              {/* INSTAGRAM LOGO */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 text-[#c13584]"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </button>

              {/* FACEBOOK LOGO */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-5 h-5 text-[#1877f2]"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </button>

              {/* WHATSAPP LOGO */}
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-6 h-6 text-[#128c7e]"
                >
                  <path
                    fill="currentColor"
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
