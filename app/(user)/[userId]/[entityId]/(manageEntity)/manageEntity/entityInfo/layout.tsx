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
  return (
    <ManageEntityInfosContextProvider entityInfos={entityInfos}>
      {children}
    </ManageEntityInfosContextProvider>
  );
}
