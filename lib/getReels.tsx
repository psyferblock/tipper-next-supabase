import supabase from "@/utils/supabase";

export default async function getReels(entityId: number) {
  const { data, error } = await supabase
    .from("entity_reel")
    .select("*")
    .eq("entity_id", `${entityId}`);
  if (error) throw error;
  console.log("Reels:", data);
  return data;
}
