import { supabase } from "@/utils/supabase-browser";

export default async function addOpeningHours(
  openingHoursMonday,
  openingHoursSaturday,
  openingHoursSunday,
  entityId
) {
  const { data, error } = await supabase
    .from("opening_hours")
    .insert({
      monday_friday: openingHoursMonday,
      saturday: openingHoursSaturday,
      sunday: openingHoursSunday,
      entity_id: entityId,
    })
    .select();
  if (error) throw error;
  console.log("opening hours returned after adding them", data);
}
