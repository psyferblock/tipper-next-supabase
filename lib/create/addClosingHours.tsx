import { supabase } from "@/utils/supabase-browser";

export default async function addClosingHours(
  closingHoursMondayFriday,
  closingHoursSaturday,
  closingHoursSunday,
  entityId
) {
  const { data, error } = await supabase
    .from("closing_hours")
    .insert({
      monday_friday: closingHoursMondayFriday,
      saturday: closingHoursSaturday,
      sunday: closingHoursSunday,
      entity_id: entityId,
    })
    .select();
  if (error) throw error;
  console.log("closing hours returned after adding them", data);
}
