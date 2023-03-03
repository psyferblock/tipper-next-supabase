import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const itemPicture = true;

  return (
    <div className=" h-24 flex sm:h-fit sm:flex-col bg-white rounded-md sm:w-56 overflow-hidden sm:overflow-hidden drop-shadow-lg sm:first-letter:pb-2">
      {itemPicture && (
        <img
          className="w-5/12 sm:w-full"
          src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
          alt=""
        />
      )}
      <div className="overflow-y-auto">
        <div className="sm:pt-4 sm:pb-1 py-1 text-xs">
          <div className=" justify-between px-2 font-bold">
            <p>Chicken Pasta</p>
            <p>350,000 LBP</p>
          </div>
          <div className="px-2 sm:px-3">
            Fresh natural home made pasta dough, cashew nuts, indian spices,
            goat cheese, rocca leaves, chicken parmesan of other stuff
          </div>
          <div className="flex justify-start sm:justify-center space-x-3 pr-2 text-xs">
            <button className="flex items-center text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-7 w-7 pt-1 fill-green-500"
              >
                <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" />
              </svg>
              Upvote
            </button>
            <button className="flex items-center text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="h-6 w-6 pb-0.5 fill-red-500"
              >
                <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
              </svg>
              Downvote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
