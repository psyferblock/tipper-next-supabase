import Image from "next/image";

export default function EntityPageAboutUsSection({ description, pictureUrl }) {
  return (
    <div className="bg-gray-200 sm:flex sm:flex-row flex flex-col-reverse items-center px-2 sm:px-0 sm:space-y-0 sm:space-x-16 py-6 sm:py-12">
      {/* IMAGE */}
      <div className="relative mt-3 sm:mt-0 sm:w-[598px] w-full mx-auto h-32 sm:h-[320px]">
        <Image src={pictureUrl} alt="About Us Picture" fill />
      </div>
      {/* PARAGRAPH */}
      <div className="sm:w-7/12 space-y-2 sm:space-y-3 sm:ml-10 sm:text-start text-center">
        <p className="font-bold text-xl mx-auto sm:ml-60 border-t-8 border-blue-500 w-fit pt-3">
          About Us
        </p>
        <p className="mr-8">{description}</p>
      </div>
    </div>
  );
}
