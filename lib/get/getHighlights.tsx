import supabase from "@/utils/supabase";

export default async function getHighlights(entityId: number) {
  const { data, error } = await supabase
    .from("entity_highlight")
    .select("*")
    .eq("entity_id", entityId);
  if (error) throw error;
  console.log("Highlights:", data);
  return data;
}
