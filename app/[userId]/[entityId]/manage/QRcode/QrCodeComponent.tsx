import DropdownManagement from "@/components/DropdownManagement";
import GenerateQrCodeSection from "@/components/GenerateQrCodeSection";

export default function Home() {
  return (
    <>
      <div className="sm:hidden flex items-center fixed z-50 bg-gray-300 h-16 justify-between w-full">
        <div className="sm:hidden font-bold text-2xl ">Manage QR Code</div>
        <div className="sm:hidden mt-1">
          <DropdownManagement />
        </div>
      </div>
      <div className="h-16 sm:h-0"></div>
      <div className=" sm:h-fit min-h-screen sm:min-h-screen px-3 sm:px-12 sm:py-8">
        <GenerateQrCodeSection />
      </div>
    </>
  );
}
