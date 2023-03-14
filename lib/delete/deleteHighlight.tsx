import supabase from "@/utils/supabase";

export default async function deleteHighlight(highlightId) {
  const { data, error } = await supabase
    .from("entity_highlight")
    .delete()
    .eq("id", highlightId);
  if (error) throw error;
  console.log(data);
}
