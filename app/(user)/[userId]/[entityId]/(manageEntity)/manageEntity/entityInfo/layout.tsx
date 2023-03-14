import getBasicPictures from "@/lib/get/getBasicPictures";
import getEntityInfos from "@/lib/get/getEntityInfos";
import { ManageEntityInfosContextProvider } from "./EntityInfoContext";

export default async function ManageEntityInfosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityId: number };
}) {
  const entityInfos = await getEntityInfos(params.entityId);
  const coverPictures = await getBasicPictures(
    "cover_picture",
    params.entityId
  );
  return (
    <ManageEntityInfosContextProvider
      entityInfos={entityInfos}
      coverPictures={coverPictures}
    >
      {children}
    </ManageEntityInfosContextProvider>
  );
}
