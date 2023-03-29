import { supabase } from "@/utils/supabase-browser";

export default async function getClosingHours(entityId) {
  const { data, error } = await supabase
    .from("closing_hours")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  // console.log("closingHours:", data);
  return data;
}
