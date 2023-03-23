export default async function getEntityOfUserServer(supabase, userId) {
  let { data, error } = await supabase
    .from("entity")
    .select()
    .eq("user_id", userId)
    .limit(1)
    .single();
  if (error) console.log(error);
  console.log("data returned after fetching the entity of a user", data);
  return data;
}
