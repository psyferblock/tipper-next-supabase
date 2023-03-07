import EntitiesCardsInGridDirection from "@/app/root-Components/entityCards-Components/EntitiesCardsInGridDirection";

export default function EntitiesBySectorPage() {
  return (
    <div>
      <div className="flex items-center justify-between pb-2 sm:pb-4">
        <p className="font-bold text-lg sm:mx-auto">Popular Entities</p>
      </div>
      <EntitiesCardsInGridDirection />
    </div>
  );
}
//Add Filter button on this page
