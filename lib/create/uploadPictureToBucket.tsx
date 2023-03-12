import supabase from "@/utils/supabase";

export default async function uploadPictureToBucked(file, bucket, folder) {
  const storageUrl =
    "https://zluncbhyhpxonqhigbhn.supabase.co/storage/v1/object/public/images-restaurant/";

  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(folder + file?.name, file as File);
  if (error) throw error;
  console.log("after url is uploaded to reel:", data);

  const pictureUrl = `${storageUrl}${data.path}`;
  return pictureUrl;
}
