import supabase from "@/utils/supabase";

export default async function updateEntityInfos(
  entityId,
  tags,
  phoneNumber,
  emailAddress,
  instagramUrl,
  facebookUrl,
  whatsappNumber,
  aboutUs_description,
  contactUs_description
) {
  //Entity Infos Updating from Database
  const { data, error } = await supabase
    .from("entity")
    .update({
      entity_tags: tags,
      entity_phone_number: phoneNumber,
      entity_email: emailAddress,
      instagram_link: instagramUrl,
      facebook_link: facebookUrl,
      whatsapp_phone_number: whatsappNumber,
      about_us_description: aboutUs_description,
      contact_us_description: contactUs_description,
    })
    .eq("id", entityId)
    .select();
  if (error) throw error;
  console.log(data);
}
