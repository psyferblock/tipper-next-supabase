export default function Home() {
  const menuCategories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Desert",
    "Drinks",
    "Our Specialties",
  ];

  return (
    <>
      <div className="grid grid-rows-1 grid-flow-col pb-3 sm:pb-0 sm:gap-0 overflow-x-auto sm:flex sm:flex-col font-semibold sm:text-base sm:w-44 text-gray-400 sm:space-y-0">
        {menuCategories.map((category) => (
          <button className="sm:flex h-fit w-max sm:w-screen sm:justify-start border-b-2 sm:border-b-0 border-b-gray-400  focus:border-b-blue-500 focus:text-blue-500 border-transparent sm:border-transparent px-2 sm:px-0 sm:pl-5 sm:py-2 sm:border-l-4 sm:border-l-gray-400  sm:hover:border-l-blue-600 sm:hover:text-blue-600 sm:focus:border-l-blue-600 sm:hover:text-xl ">
            {category}
          </button>
        ))}
      </div>
    </>
  );
}
