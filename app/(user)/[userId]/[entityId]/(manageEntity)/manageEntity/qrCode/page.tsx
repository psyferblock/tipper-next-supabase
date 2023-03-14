// "use client "
import ManageQrCode from "./qrCode-Components/ManageQrCode";
import MobileDropdownManagement from "../manageEntity-Components/MobileDropdownManagement";
import QrCodeGenerator from "@/app/tarek-components/QrCodeGenerator";

export default function ManageQrCodePage() {
  const pageUrl="www.google.com"
//  const logo =
//   "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcurezone.com%2Fupload%2FMembers%2Fexploding_tomato.jpg&f=1&nofb=1&ipt=29485f3834a68a08de704237ee294f516e4f0b35c94c0d758aed1786cd61f889&ipo=images";

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
      <QrCodeGenerator
       pageUrl={pageUrl} 
      //  logo={logo}
      
       />

      </div>
    </>
  );
}
