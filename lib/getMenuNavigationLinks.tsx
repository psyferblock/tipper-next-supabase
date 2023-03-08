import supabase from "@/utils/supabase";

export default async function getMenuItems(entityId: number) {
  const { data, error } = await supabase
    .from("menu_category")
    .select("*")
    .eq("entity_id", entityId);
  if (error) throw error;
  return data;
}
