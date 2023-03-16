import { supabase } from "@/utils/supabase-browser";

export async function getEntityInfos(entityId: number) {
  console.log("calling entity infos");

  //Entity Infos Reading from Database
  const { data, error } = await supabase
    .from("entity")
    .select()
    .eq("id", entityId);
  if (error) throw error;
  console.log("entity infos:", data[0]);
  const entityInfos = data[0];
  return entityInfos;
}

export async function getEntityInfosServer(
  supabaseServerClient,
  entityId: number
) {
  //Entity Infos Reading from Database
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select()
    .eq("id", entityId);
  if (error) throw error;
  console.log("entity infos:", data[0]);
  const entityInfos = data[0];
  return entityInfos;
}
