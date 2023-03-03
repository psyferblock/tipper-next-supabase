export default function Home() {
  return (
    <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg">
      <div className="text-lg font-bold mb-2">Tags</div>
      <div className="text-xs">Add tags</div>
      {/* TAG INPUT FIELD */}
      <div className="flex items-center space-x-3">
        <input
          type="text"
          name="tags"
          id="price"
          className="h-12 block w-full rounded-md border-gray-400 pl-7 pr-12 mt-2 mb-6 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Type tag here"
        />
        <button className="text-sm text-blue-500 mb-3 font-medium">Add</button>
      </div>
      {/* TAGS ROW */}
      <div className="grid grid-flow-col gap-3 pb-3 sm:pb-2 px-1 sm:px-2 sm:py-1 overflow-x-auto  sm:flex sm:space-x-3">
        {/* TAG 1 */}
        <div className="px-2 py-1 flex w-fit items-center space-x-3 justify-between bg-gray-100 rounded-lg text-black text-xs  drop-shadow-md">
          <p>Vegeterian</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* TAG 2 */}

        <div className="flex w-fit items-center justify-between space-x-3 bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-md">
          <div>Cozy</div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* TAG 2 */}

        <div className="flex w-fit items-center justify-between space-x-3 bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-md">
          <div>Cozy</div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* TAG 3 */}

        <div className="flex w-fit items-center justify-between space-x-3 bg-gray-100 rounded-lg text-black text-xs px-2 py-1 drop-shadow-md">
          <div>Seafood</div>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
