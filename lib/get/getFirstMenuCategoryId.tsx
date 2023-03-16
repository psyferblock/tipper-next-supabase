import { supabase } from "@/utils/supabase-browser";

export default async function getFirstMenuCategoryId(entityId) {
  const { data, error } = await supabase
    .from("menu_category")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  return data[0]?.id;
}
