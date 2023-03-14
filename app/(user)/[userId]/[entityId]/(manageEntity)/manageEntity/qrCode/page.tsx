import ManageQrCode from "./qrCode-Components/ManageQrCode";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import QrCodeGenerator from "@/app/(user)/[userId]/tareks-components/QrCodeGenerator";

// import {userId,entityId} from "@AuthContextProvider"
// const userId = "506c2ec0-c45d-4105-b27e-f321e81eed32";
const entityId = "a7fb29ed-3b7a-452b-a284-ae2a2dff14bb";
export default function ManageQrCodePage() {
  const pageUrl="www.google.com"
  // const pageUrl2=`www.tipperNetwork.com//${entityId}`
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
        {/* <ManageQrCode /> */}
        <QrCodeGenerator pageUrl={pageUrl} logo={null} />
      </div>
    </>
  );
}
