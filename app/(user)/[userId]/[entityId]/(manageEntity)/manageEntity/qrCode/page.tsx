import ManageQrCode from "./qrCode-Components/ManageQrCode";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import QrCodeGenerator from "./qrCode-Components/QrCodeGenerator";

export default function ManageQrCodePage() {
  const pageUrl = "www.google.com";

  return (
    <>
      <div className="sm:hidden flex items-center fixed z-50 bg-gray-300 h-16 justify-between w-full">
        <div className="sm:hidden font-bold text-2xl ">Manage QR Code</div>
        <div className="sm:hidden mt-1">
          <MobileDropdownManagement />
        </div>
      </div>
      <div className="h-16 sm:h-0"></div>
      <div className=" sm:h-fit min-h-screen sm:min-h-screen sm:w-full px-3 ">
        <QrCodeGenerator pageUrl={pageUrl} logo={null} />
        {/* <ManageQrCode /> */}
      </div>
    </>
  );
}
