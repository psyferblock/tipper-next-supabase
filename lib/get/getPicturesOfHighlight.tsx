import { supabase } from "@/utils/supabaseClient";

export default async function getPicturesOfHighlight(highlightId) {
  const { data, error } = await supabase
    .from("highlight_media")
    .select()
    .eq("entity_highlight_id", highlightId);
  if (error) throw error;
  console.log("arrayOfUrls of highlight returned:", data);
  return data;
}
