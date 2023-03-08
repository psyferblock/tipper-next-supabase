"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function CategoriesNavLink({
  categoryRoute,
  children,
}: {
  categoryRoute: string;
  children: React.ReactNode;
}) {
  const userId = "506c2ec0-c45d-4105-b27e-f321e81eed32";
  const entityId = "a7fb29ed-3b7a-452b-a284-ae2a2dff14bb";

  const segment = useSelectedLayoutSegment();
  const isActive = categoryRoute == segment;
  return (
    <Link
      href={`${userId}/${entityId}/manageEntity/${categoryRoute}`}
      className={
        isActive
          ? "text-blue-600 px-6 py-2 flex justify-start sm:bg-gray-100 "
          : "text-black px-6 py-2 flex justify-start sm:focus:text-blue-600 sm:focus:bg-gray-100 sm:hover:text-blue-600 hover:bg-gray-100"
      }
    >
      {children}
    </Link>
  );
}
