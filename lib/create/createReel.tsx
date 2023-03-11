import supabase from "@/utils/supabase";

export default async function createReel(highlightName, entityId) {
  const { data, error } = await supabase
    .from("entity_reel")
    .insert({
      reel_name: highlightName,
      entity_id: entityId,
    })
    .select();

  if (error) throw error;
  console.log("data returned after reel creation", data);
  const newHighlightId = data[0].id;
  return newHighlightId;
}
