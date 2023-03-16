import { supabase } from "@/utils/supabase-browser";

export default async function createHighlight(highlightName, entityId) {
  const { data, error } = await supabase
    .from("entity_highlight")
    .insert({
      highlight_name: highlightName,
      entity_id: entityId,
    })
    .select();

  if (error) throw error;
  console.log("data returned after highlight creation", data);
  const newHighlightId = data[0].id;
  return newHighlightId;
}
