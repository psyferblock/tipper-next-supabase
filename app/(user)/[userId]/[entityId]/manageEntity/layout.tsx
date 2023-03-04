import { Children } from "react";
import ManageEntityLeftMenu from "./manageEntity-Components/ManageEntityLeftMenu";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-300 sm:h-fit sm:min-h-screen px-3 sm:px-12 pt-0 pb-7 sm:py-8">
      {/* PAGE BG COLOR AND PADDING  */}
      <div className="hidden sm:block font-bold text-2xl pt-6 pb-4">
        Manage Entity
      </div>
      <div className="flex">
        {/* LEFT MENU */}
        <ManageEntityLeftMenu />
        {children}
      </div>
    </div>
  );
}
