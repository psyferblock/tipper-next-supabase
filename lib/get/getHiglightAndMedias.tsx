export async function getHighlightAndMediasServer(
  supabaseServerClient,
  entityId
) {
  const { data, error } = await supabaseServerClient
    .from("entity")
    .select(
      `
      id,
      entity_highlight (
        id
      ),
    `
    )
    .eq("id", entityId)
    .select();
  if (error) throw error;

  console.log("DATA DELICOUS", data);
}
