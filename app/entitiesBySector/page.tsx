import EntitiesCardsInGridDirection from "@/app/root-Components/entityCards-Components/EntitiesCardsInGridDirection";
import EntityCard from "@/app/root-Components/entityCards-Components/EntityCard";
import { getAllEntitiesServer } from "@/lib/get/getAllEntities";
import { createServerClient } from "@/utils/supabase-server";

export default async function EntitiesBySectorPage() {
  //Fetch from DB
  const supabase = createServerClient();
  let listOfEntities = await getAllEntitiesServer(supabase);

  //  const entitiesPerIndustry = listOfEntities.filter(
  //   (entity) => entity.industry_id == props.industryId
  // );

  const verifiedEntities = listOfEntities.filter(
    (entity) => entity.is_verified == true
  );

  return (
    <div>
      <div className="flex items-center justify-between pb-2 sm:pb-4">
        <div className="font-bold text-lg sm:mx-auto">Popular Entities</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-7">
        {verifiedEntities.map((entity) => (
          <EntityCard entity={entity} />
        ))}
      </div>

      {/* <EntitiesCardsInGridDirection /> */}
    </div>
  );
}
//Add Filter button on this page
