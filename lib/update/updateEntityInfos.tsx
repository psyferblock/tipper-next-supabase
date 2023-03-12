import supabase from "@/utils/supabase";

export default async function updateEntityInfos(
  entityId,
  tags,
  phoneNumber,
  emailAddress,
  instagramUrl,
  facebookUrl,
  whatsappNumber,
  aboutUsDescription,
  aboutUsPictureUrl,
  contactUsDescription,
  contactUsPictureUrl
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
      about_us_description: aboutUsDescription,
      about_us_picture_url: aboutUsPictureUrl,
      contact_us_description: contactUsDescription,
      contact_us_picture_url: contactUsPictureUrl,
    })
    .eq("id", entityId)
    .select();
  if (error) throw error;
  console.log(data);
}
