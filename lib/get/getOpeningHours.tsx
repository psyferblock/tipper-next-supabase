import { supabase } from "@/utils/supabase-browser";
export default async function getOpeningHours(entityId) {
  const { data, error } = await supabase
    .from("opening_hours")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  // console.log("openingHours:", data);
  return data;
}
