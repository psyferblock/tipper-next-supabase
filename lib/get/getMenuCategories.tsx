import { supabase } from "@/utils/supabaseClient";

export default async function getMenuCategories(entityId: number) {
  const { data, error } = await supabase
    .from("menu_category")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  return data;
}
