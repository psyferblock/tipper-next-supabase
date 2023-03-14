"use client";

import { useAuthContext } from "@/app/Store";
import updateEntityInfos from "@/lib/update/updateEntityInfos";
import { useManageEntityInfosContext } from "../EntityInfoContext";

export default function StickyBarSaveCancel({ entityId }) {
  const {
    tags,
    phoneNumber,
    emailAddress,
    instagramUrl,
    facebookUrl,
    whatsappNumber,
    aboutUsDescription,
    aboutUsPictureUrl,
    contactUsDescription,
    contactUsPictureUrl,
  } = useManageEntityInfosContext();

  async function handleSaveButton() {
    await updateEntityInfos(
      entityId,
      tags,
      phoneNumber,
      emailAddress,
      instagramUrl,
      facebookUrl,
      whatsappNumber,
      aboutUsDescription,
      aboutUsPictureUrl,
      contactUsDescription,
      contactUsPictureUrl
    );
  }

  return (
    <div className="bg-gray-500 opacity-95 h-14 fixed bottom-0 left-0 right-0 py-2 px-12 flex justify-end space-x-5">
      <button className="w-28 h-10 rounded-3xl bg-white border hover:bg-gray-200 border-gray-600 text-black text-sm ">
        Cancel
      </button>
      <button
        onClick={() => handleSaveButton()}
        className="w-28 h-10 rounded-3xl bg-blue-600 border hover:bg-blue-700 border-gray-600 text-black text-sm "
      >
        Save
      </button>
    </div>
  );
}
