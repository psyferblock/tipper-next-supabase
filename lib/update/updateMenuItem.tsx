import { supabase } from "@/utils/supabase-browser";

export default async function updateMenuItem(
  itemName: string,
  itemDescription: string,
  itemPrice: string,
  itemPictureUrl: string,
  menuItemId
) {
  const { data, error } = await supabase
    .from("menu_item")
    .update({
      item_name: itemName,
      item_price: itemPrice,
      item_description: itemDescription,
      item_picture_url: itemPictureUrl,
    })
    .eq("id", menuItemId)
    .select();
  if (error) throw error;
  console.log(data);
}
