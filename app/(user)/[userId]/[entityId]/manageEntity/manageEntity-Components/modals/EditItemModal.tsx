"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function Example(props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-50"
        initialFocus={cancelButtonRef}
        onClose={props.closeModal}
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
          <div className="flex min-h-full items-end justify-center p=3 sm:p-4 text-center sm:items-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full sm:max-w-lg">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start w-full">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <div className="flex items-center justify-between mb-5 sm:mb-0">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 sm:mb-4"
                        >
                          Edit Item
                        </Dialog.Title>
                        <button
                          onClick={props.closeModal}
                          className="sm:hidden"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      {/* ITEM NAME */}
                      <div className="flex justify-between text-xs">
                        <p>Item Name</p>
                        <p className="text-gray-400">150</p>
                      </div>
                      {/* ITEM NAME INPUT FIELD */}
                      <input
                        type="text"
                        id="item name"
                        className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-[235px] mt-1 mb-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Item name"
                        ref={cancelButtonRef}
                      />
                      {/* ITEM DESCRIPTION */}
                      <div className="flex justify-between text-xs">
                        <p>Item Description</p>
                        <p className="text-gray-400">150</p>
                      </div>
                      {/* DESCRIPTION INPUT FIELD */}
                      <input
                        type="text"
                        id="item description"
                        className="h-12 block w-full rounded-md border-gray-300 pl-4 pr-12 mt-1 mb-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Description"
                      />
                      {/* PRICE */}
                      <div className="flex justify-between text-xs pb-1">
                        <p>Price</p>
                        <p className="text-gray-400">150</p>
                      </div>
                      {/* PRICE INPUT FIELD */}
                      <div className="flex py-4 items-center border border-gray-300 hover:border-indigo-500 hover:border-2 rounded-lg h-12 pl-4 mb-4">
                        <p className="h-12 pt-3 text-gray-500 pr-4 border-r border-gray-300">
                          USD
                        </p>
                        <input
                          type="text"
                          id="price"
                          className="h-6 block w-full border-0 pl-4 pr-12 my-0.5 py-0 focus:border-0 focus:ring-0 sm:text-sm"
                          placeholder="0.00"
                        />
                      </div>
                      {/* IMAGE */}
                      <div className="w-full">
                        <p className="text-xs text-start">Image</p>
                        {/* IMAGE CONTAINER */}
                        <div className="bg-gray-100 mt-1 w-full flex justify-center rounded-md border-2 border-dashed border-gray-400 px-6 pt-[52px] ">
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
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-2 sm:py-3 flex justify-end items-center sm:px-6">
                  <button
                    type="button"
                    className="mr-3 inline-flex w-full justify-center rounded-3xl border border-gray-300 bg-white px-7 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={props.closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-3xl border border-transparent bg-blue-500 px-9 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={props.saveButtonInEditItemModalIsClicked}
                  >
                    Save
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
