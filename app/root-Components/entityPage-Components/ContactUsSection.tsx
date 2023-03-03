export default function Home() {
  return (
    <div className="bg-white sm:flex items-center px-4 sm:px-0 space-y-4 sm:space-y-0 sm:space-x-16 py-4 sm:py-12">
      {/* PARAGRAPH */}
      <div className="sm:w-7/12 space-y-2 sm:space-y-3 sm:ml-10 sm:text-start text-center">
        <p className="font-bold text-xl mx-auto border-t-8 border-blue-500 w-fit pt-3">
          Get in touch with us!
        </p>
        <p className="pr-8 ">
          We deliver in all areas of Beirut! Text us by whatsapp or call us to
          place your orders.
        </p>
        <button className="w-40 h-10 rounded-3xl bg-blue-500 text-white text-sm">
          Contact Us
        </button>
      </div>
      {/* IMAGE */}
      <img
        className=" sm:w-[598px] w-full mx-auto h-32 sm:h-[320px]"
        src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
        alt=""
      />
    </div>
  );
}
