"use client";

import uploadPictureToBucket from "@/lib/create/uploadPictureToBucket";
import deleteBasicPicture from "@/lib/delete/deleteBasicPicture";
import Image from "next/image";
import { ChangeEvent } from "react";
import { useManageEntityInfosContext } from "../EntityInfoContext";

export default function ManageCoverPhotos() {
  // Could be used for when Add Highlight button is clicked to go to new pic
  // const buttonRef = useRef(null);

  //"arrayOfPictureObjects" is an array containing a list of the following object:
  // {
  //   id:"...",
  //   created_at: "...",
  //   media_category:"...",
  //   media_url:"...",
  //   entity_highlight_id:"...",
  // }
  const { arrayOfPictureObjects, setArrayOfPictureObjects } =
    useManageEntityInfosContext();

  async function handleUploadImageButton(e: ChangeEvent<HTMLInputElement>) {
    let file;

    if (e.target.files) {
      file = e.target.files[0];
    }
    let pictureUrl = await uploadPictureToBucket(
      file,
      "images-restaurant",
      "public"
    );
    let newArray = arrayOfPictureObjects.concat({
      id: null,
      media_url: pictureUrl,
    });
    setArrayOfPictureObjects(newArray);
  }
  console.log("array of pics:", arrayOfPictureObjects);

  async function handleDeletePictureButton(deletedPicutreObject) {
    //Locating which picture should be deleted is based on the URL of the picture (could be done with
    // picture Id instead, but would need to upload photo to DB and get its ID which is an extra API
    // call for each picture upload)

    //If picture alrready exists in database, we delete it from database right away
    if (deletedPicutreObject.id != null) {
      await deleteBasicPicture(deletedPicutreObject.id);
    }
    //Remove the picture from the state variable array
    const newArray = arrayOfPictureObjects.filter(
      (pictureObject) =>
        pictureObject.media_url != deletedPicutreObject.media_url
    );
    setArrayOfPictureObjects(newArray);
  }

  return (
    <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg">
      <div className="sm:flex">
        <div className="text-lg font-bold grow">Announcement Banners</div>
        {/* DESKTOP BUTTON */}
        <button
          className="hidden sm:flex text-blue-500 items-center space-x-1"
          onChange={(e) => {
            handleUploadImageButton(e);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add Slide
        </button>
      </div>
      {/* "Caption Goes here" */}
      <div className="text-xs">
        Add up to 5 photos that will appear as a slideshow at the top of your
        entity page
      </div>
      {/* MOBILE BUTTON */}
      <button className="sm:hidden flex text-blue-500 items-center space-x-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        Add Slide
      </button>
      {/* UPLOAD PICTURE FIELD */}
      <div className=" space-x-4 sm:space-x-4 grid grid-rows-1 grid-flow-col overflow-x-auto">
        {/* CONTAINER TO UPLOAD PICTURE */}
        <div className="bg-gray-100 flex  h-56 rounded-lg border-2 border-dashed border-gray-400 my-4">
          <div className=" flex justify-center rounded-md px-6 pt-[52px] ">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="coverPhoto"
                  className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                >
                  <span className="">Upload a file</span>
                  <input
                    id="coverPhoto"
                    name="coverPhoto"
                    type="file"
                    className="sr-only"
                    onChange={(e) => {
                      handleUploadImageButton(e);
                    }}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
          {/* PICTURES UPLOADED SECTION */}
          {arrayOfPictureObjects ? (
            <>
              {arrayOfPictureObjects.map((pictureObject) => (
                <div className="relative bg-gray-100  h-56 rounded-lg border-2 border-dashed border-gray-400 my-4 ">
                  <Image src={pictureObject.media_url} alt="cover photo" fill />
                  <button
                    onClick={() => handleDeletePictureButton(pictureObject)}
                    className="text-blue-500 z-50 text-4xl"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
