import { supabase } from "@/utils/supabase-browser";

export async function getEntityTypes() {
  const { data, error } = await supabase.from("entity_type").select("*");
  if (error) throw error;
  console.log("entity types:", data);
  return data;
}
