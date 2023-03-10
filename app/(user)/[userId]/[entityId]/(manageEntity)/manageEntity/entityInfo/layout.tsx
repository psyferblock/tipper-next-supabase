import { ManageEntityInfosContextProvider } from "./EntityInfoContext";

export default async function ManageEntityInfosLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { entityId: number };
}) {
  return (
    <ManageEntityInfosContextProvider>
      {children}
    </ManageEntityInfosContextProvider>
  );
}
