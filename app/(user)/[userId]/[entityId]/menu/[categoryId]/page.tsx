import MenuItemCard from "@/app/root-Components/menu-Components/MenuItemCard";

export default function EntityPageMenuItems() {
  return (
    <>
      <div className="grid h-96 sm:h-fit gap-3 overflow-y-auto sm:grid sm:grid-rows-2 sm:grid-flow-col sm:gap-5 sm:pb-5 sm:overflow-x-auto">
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
        <MenuItemCard />
      </div>
      {/* LEFT / RIGHT NAVIGATION BUTTONS */}
      {/* <div className="hidden sm:flex justify-end space-x-1 pr-1">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-9 h-9"
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
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div> */}
    </>
  );
}
