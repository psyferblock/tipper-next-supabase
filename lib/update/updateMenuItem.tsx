import { supabase } from "@/utils/supabase-browser";

export default async function updateMenuItem(
  itemName,
  itemDescription,
  itemPrice,
  itemPictureUrl,
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
