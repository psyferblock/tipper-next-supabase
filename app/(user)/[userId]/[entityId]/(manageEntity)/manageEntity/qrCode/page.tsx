import ManageQrCode from "./qrCode-Components/ManageQrCode";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import QrCodeGenerator from "./qrCode-Components/QrCodeGenerator";

export default function ManageQrCodePage() {
  const pageUrl = "www.google.com";

  return (
    <>
      <div className=" sm:h-fit min-h-screen sm:min-h-screen sm:w-full px-3 ">
        <QrCodeGenerator pageUrl={pageUrl} logo={null} />
        {/* <ManageQrCode /> */}
      </div>
    </>
  );
}
