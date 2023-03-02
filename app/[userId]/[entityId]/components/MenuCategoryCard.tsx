import ToggleButton from "./ToggleButton";

export default function Home(props) {
  return (
    <a
      href="/management/menuItemsPage"
      className="h-fit sm:h-[198px] w-full space-y-3 bg-white drop-shadow-lg rounded-md sm:divide-y py-5 px-3 sm:px-4 flex sm:flex-col hover:cursor-pointer"
    >
      {/* UPPER PART OF CARD */}
      <div className="sm:space-y-2">
        <div className="h-20 w-20 rounded-full mx-auto overflow-hidden">
          <img
            className=" h-24 w-24"
            src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
            alt=""
          />
        </div>
        <p className="hidden sm:block text-center font-semibold text-gray-700">
          {props.type}
        </p>
      </div>
      {/* MOBILE VERSION */}
      <div className="sm:hidden w-full flex justify-between">
        <div className="sm:hidden ml-2 space-y-2">
          <p className="sm:hidden text-start mr-2 font-semibold text-gray-700">
            {props.type}
          </p>
          <div className="text-sm flex text-start space-x-2 ">
            <ToggleButton />
            <p>Publish</p>
          </div>
        </div>
        <button className="sm:hidden w-fit text-xs flex text-blue-500 pt-1">
          Edit Name
        </button>
      </div>

      {/* LOWER PART OF CARD */}
      <div className="hidden sm:flex text-xs items-center justify-between sm:pt-4">
        <div className="flex space-x-2">
          <ToggleButton />
          <p className="pt-0.5">Publish</p>
        </div>
        <button onClick={props.click} className="text-blue-500 pb-1">
          Edit Name
        </button>
      </div>
    </a>
  );
}
