export default function Home() {
  return (
    <div className="bg-gray-200 sm:flex sm:flex-row flex flex-col-reverse items-center px-2 sm:px-0 sm:space-y-0 sm:space-x-16 py-6 sm:py-12">
      {/* IMAGE */}
      <img
        className="mt-3 sm:mt-0 sm:w-[598px] w-full mx-auto h-32 sm:h-[320px]"
        src="https://cdn.ldsliving.com/dims4/default/2040800/2147483647/strip/true/crop/640x395+0+0/resize/640x395!/format/webp/quality/90/?url=http%3A%2F%2Flds-living-brightspot.s3.amazonaws.com%2F7c%2F30%2F864e82a22a48241f8a28bc7abb4d%2F42088.jpg"
        alt=""
      />
      {/* PARAGRAPH */}
      <div className="sm:w-7/12 space-y-2 sm:space-y-3 sm:ml-10 sm:text-start text-center">
        <p className="font-bold text-xl mx-auto sm:ml-60 border-t-8 border-blue-500 w-fit pt-3">
          About Us
        </p>
        <p className="mr-8">
          We are a great entity that sells soup to any person on earth willing
          to taste our delicious mix of herbs, coconut and cacao. Originally
          crafted on the shores of Brazil, our beer is made with the greatest
          passion you'll find on the shores of Madagascar. We also sell all
          kinds of sugary sugars such as nobel prizes and arctic monkeys.
        </p>
      </div>
    </div>
  );
}
