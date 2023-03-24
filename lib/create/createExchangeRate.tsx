import { supabase } from "@/utils/supabase-browser";

export default async function createExchangeRate(entityId, exchangeRate) {
  const { data, error } = await supabase
    .from("exchange_rate")
    .insert({
      entity_id: entityId,
      usd_lbp_rate: exchangeRate,
    })
    .eq("entity_id", entityId)
    .select()
    .single();
  if (error) throw error;
  console.log("data returned after creation of exchange rate", data);
}
