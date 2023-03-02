import ToggleButton from "@/components/ToggleButton";

export default function Home() {
  return (
    <div className="h-fit  bg-white rounded-lg p-3 sm:p-4 drop-shadow-lg space-y-4">
      <div className="sm:flex items-center sm:space-x-6">
        <div className="text-lg font-bold mb-1">Contact Us</div>
        <div className="flex items-center pb-0.5 space-x-1 sm:py-0 py-1">
          <div className="pt-0.5">
            <ToggleButton />
          </div>
          <p className="text-xs sm:mt-0">
            Show "Contact Us" section on your entity's public page
          </p>
        </div>
      </div>
      <div>
        <label htmlFor="about us" className="text-xs text-gray-600 font-medium">
          Brief Description
        </label>
        {/* CONTACT US INPUT FIELD */}
        <input
          type="text"
          name="about us"
          id="about us"
          className="h-32 block w-full rounded-md border-gray-300 pb-24 pl-4 pr-12 mt-1 focus:border-indigo-500 focus:ring-indigo-500 text-xs sm:text-sm"
          placeholder="Enter a description of products people can order by contacting you."
        />
      </div>
      <div>
        {/* UPLOAD PICTURE FIELD */}
        <label className="text-xs text-gray-600 font-medium ">Image</label>
        <div className="bg-gray-100  h-56 rounded-lg border-2 border-dashed border-gray-400 mt-1">
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
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-gray-100 font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-400"
                >
                  <span className="">Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
