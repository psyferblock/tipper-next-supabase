"use client";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React, { Component } from "react";

import Stories from "react-insta-stories";

export default function Highlight({ picturesInHighlight }) {
  const stories = picturesInHighlight.map((pictureObject) => {
    return {
      url: pictureObject.media_url,
      duration: 5000,
      //   seeMore: ({ close }) => {
      //     return <div onClick={close}>Hello, click to close this.</div>;
      //   },
      //   header: "hello",
    };
  });

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => <></>}>
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
                <div className="sm:flex sm:justify-center">
                  <Stories
                    stories={stories}
                    defaultInterval={1500}
                    width={432}
                    height={768}
                  />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
