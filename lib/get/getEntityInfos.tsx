import supabase from "@/utils/supabase";

export default async function getEntityInfos(entityId: number) {
  //Entity Infos Reading from Database
  const { data, error } = await supabase
    .from("entity")
    .select("*")
    .eq("id", entityId);
  if (error) throw error;
  console.log("entity infos:", data[0]);
  const entityInfos = data[0];
  return entityInfos;
}
