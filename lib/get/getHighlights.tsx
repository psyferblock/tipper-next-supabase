import { supabase } from "@/utils/supabase-browser";

export async function getHighlights(entityId: string) {
  const { data, error } = await supabase
    .from("entity_highlight")
    .select()
    .eq("entity_id", entityId);
  if (error) throw error;
  console.log("Highlights:", data);
  return data;
}

export async function getHighlightsServer(
  supabaseServerClient,
  entityId: number
) {
  const { data, error } = await supabase
    .from("entity_highlight")
    .select()
    .eq("entity_id", entityId)
    .order("id", { ascending: true });

  if (error) throw error;
  console.log("Highlights:", data);
  return data;
}
