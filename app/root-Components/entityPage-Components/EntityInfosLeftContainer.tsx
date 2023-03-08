"use client";

import FacebookButton from "./ConnectWithUsButtons/FacebookButton";
import InstagramButton from "./ConnectWithUsButtons/InstagramButton";
import PhoneCallButton from "./ConnectWithUsButtons/PhoneCallButton";
import TextUsWhatsappButton from "./ConnectWithUsButtons/TextUsWhatsappButton";

export default function EntityPageContainerWithEntityInfos({ entityInfos }) {
  return (
    <div className=" bg-white rounded-lg mb-5 sm:mb-0 py-4 drop-shadow-xl px-3 sm:px-6 flex-none sm:w-[307px]">
      <div className="font-semibold flex justify-between flex-col space-y-3 sm:space-y-4">
        {/* ENTITY TAGS DIV */}
        <div>
          <p>Entity Tags</p>
          <div className="grid grid-rows-2 grid-flow-col gap-2 sm:gap-2 sm:pb-3 pb-3 pt-2 sm:pt-2 overflow-auto">
            {entityInfos.entity_tags.map((tag) => (
              <p className="w-fit  mr-3 flex bg-gray-200 rounded-xl text-black text-xs px-4 py-1 drop-shadow-sm">
                {tag}
              </p>
            ))}
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
            <p className="font-normal text-xs">{entityInfos.entity_address}</p>
            {/* GOOGLE MAPS */}
            <div className="bg-gray-200 h-32 rounded-lg"></div>
          </div>
        </div>

        {/* CONNECT WITH US DIV */}
        <div>
          <p className="pb-0.5">Connect With Us</p>
          <div className="sm:px-1 space-y-2">
            {/* PHONE BUTTON */}
            <PhoneCallButton phoneNumber={entityInfos.entity_phone_number} />
            <div className="flex items-center space-x-2">
              {/* INSTAGRAM BUTTON */}
              <InstagramButton url={entityInfos.instagram_link} />
              {/* FACEBOOK BUTTON */}
              <FacebookButton url={entityInfos.facebook_link} />
              {/* WHATSAPP BUTTON */}
              <TextUsWhatsappButton
                phoneNumber={entityInfos.entity_phone_number}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
