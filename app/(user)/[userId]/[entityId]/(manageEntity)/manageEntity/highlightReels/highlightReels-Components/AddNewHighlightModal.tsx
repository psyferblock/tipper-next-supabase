"use client";

import { ChangeEvent, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import createReel from "@/lib/create/createReel";
import Image from "next/image";
import uploadPictureToBucket from "@/lib/create/uploadPictureToBucket";
import insertUrlsToReel from "@/lib/create/insertUrlsToReel";

export default function AddNewHighlightModal(props) {
  //State
  const [highlightName, setHighlightName] = useState<string | undefined>();
  const [arrayOfPictureUrls, setArrayOfPictureUrls] = useState([]);

  console.log("arrayOfPictureUrls", arrayOfPictureUrls);

  const buttonRef = useRef(null);

  async function handleAddButton() {
    const newHighlightId = await createReel(highlightName, props.entityId);
    await insertUrlsToReel(arrayOfPictureUrls, newHighlightId);

    props.closeModal();
  }

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
    let newArray = arrayOfPictureUrls.concat(pictureUrl);
    console.log("new array after concat:", newArray);
    setArrayOfPictureUrls(newArray);
  }

  function handleCancelButton() {
    setArrayOfPictureUrls([]);
    setHighlightName("");
    props.closeModal();
  }
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={buttonRef}
        onClose={() => handleCancelButton()}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* At the end of this classname in the Dialog.Panel div, the width of the section for pictures */}
              <Dialog.Panel className="relative transform overflow-hidden  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:w-fit">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex items-center justify-between mb-2">
                        <Dialog.Title
                          as="h3"
                          className="text-lg text-start font-medium leading-6 text-gray-900 mb-4"
                        >
                          Add New Highlight
                        </Dialog.Title>
                        <button className="sm:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 mb-4 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>

                      <div className="flex justify-between text-xs">
                        <p>Highlight Name</p>
                        <p className="text-gray-400">150</p>
                      </div>
                      {/* HIGHLIGHT NAME INPUT FIELD */}
                      <input
                        type="text"
                        name="tags"
                        id="price"
                        className="h-14 w-full sm:h-12 block rounded-md border-gray-300 sm:pl-4 sm:pr-[235px] mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Type highlight name"
                        ref={buttonRef}
                        value={highlightName}
                        onChange={(e) => setHighlightName(e.target.value)}
                      />
                      <div className=" space-x-4 sm:space-x-4 grid grid-rows-1 grid-flow-col overflow-x-auto">
                        {/* ADD HIGHLIGHT CONTAINER */}
                        <div className="bg-gray-100 w-full flex justify-center rounded-md border-2 border-dashed border-gray-400 sm:px-6  sm:pt-[52px] ">
                          <div className="space-y-1 text-center pt-24 sm:pt-0 pb-20 sm:pb-9">
                            <svg
                              className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-gray-400"
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
                            <div className=" text-xs text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                              >
                                <span className="underline">
                                  Upload an image
                                </span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => {
                                    handleUploadImageButton(e);
                                  }}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                        {/* ADD HIGHLIGHT PLUS SIGN CONTAINER */}

                        {arrayOfPictureUrls ? (
                          <>
                            {arrayOfPictureUrls.map((pictureUrl) => (
                              <div className="relative bg-gray-100 w-full flex justify-center rounded-md border-2 border-dashed border-gray-400 sm:px-6 pt-[52px] ">
                                <Image
                                  src={pictureUrl}
                                  alt="highlight picture"
                                  fill
                                />
                              </div>
                            ))}
                          </>
                        ) : (
                          <div className="relative bg-gray-100 w-full flex justify-center rounded-md border-2 border-dashed border-gray-400 sm:px-6 pt-[52px] ">
                            <button className="pb-12">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={3}
                                stroke="currentColor"
                                className="w-10 h-10 text-indigo-600 mx-auto"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>
                              <p className="text-xs text-indigo-600 font-semibold">
                                Add new highlight
                              </p>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full ml-3 justify-center rounded-3xl border border-transparent bg-blue-500 px-7 sm:px-11 py-2 sm:py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleAddButton()}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className=" inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-white px-8 py-2 sm:py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => handleCancelButton()}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
