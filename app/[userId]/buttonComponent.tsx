"use client";

import React from "react";

import { useRouter } from "next/navigation";

export default function RoutedButtonComponent(href) {
  const router = useRouter();

  const goToHrefPage = (p) => {
     router.push(p);
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white w-fit px-5  sm:w-40 h-10 sm:h-10 rounded-3xl sm:rounded-3xl sm:text-sm sm:hover:text-lg"
        onClick={()=>goToHrefPage(href)}
      >
        Create Now
      </button>
    </>
  );
}
