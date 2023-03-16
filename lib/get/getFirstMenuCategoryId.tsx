import { supabase } from "@/utils/supabase-browser";

export async function getFirstMenuCategoryId(entityId) {
  const { data, error } = await supabase
    .from("menu_category")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  return data[0]?.id;
}

export async function getFirstMenuCategoryIdServer(
  supabaseServerClient,
  entityId
) {
  const { data, error } = await supabaseServerClient
    .from("menu_category")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  return data[0]?.id;
}
