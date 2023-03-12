import MenuNavigation from "@/app/root-Components/menu-Components/MenuNavigation";
import getExchangeRate from "@/lib/get/getExchangeRate";

export default async function EntityPageMenuSectionLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityId: number };
}) {
  const exchangeRate = await getExchangeRate(params.entityId);
  const exchangeRateFormatted = exchangeRate.toLocaleString();

  return (
    <div className="bg-gray-100 py-6 sm:py-8">
      <div className="text-center sm:my-5 pb-4 sm:pb-4">
        <p className="font-bold text-xl mx-auto pt-2 sm:pt-3 border-t-4 border-blue-500 w-fit">
          Our Menu
        </p>
        <p className="text-xs font-semibold">
          (Rate: {exchangeRateFormatted}LBP)
        </p>
      </div>
      <div className=" sm:flex sm:space-x-1">
        <div className="sm:w-1/6 ">
          {/* @ts-expect-error Server Component */}
          <MenuNavigation entityId={params.entityId} />
        </div>
        {/* MENU ITEM CARDS */}
        {children}
      </div>
    </div>
  );
}
