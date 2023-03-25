import { createServerClient } from "@/utils/supabase-server";

import "./globals.css";
import Navbar from "./root-Components/tools-Components/NavBar";
import { AuthContextProvider } from "./context/Store";
import SupabaseListener from "./supabase-listener";
import SupabaseProvider from "./supabase-provider";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Navbar session={session} />
          <div className="h-16 mb-0 sm:mb-3"></div>
          <div className="bg-gray-300 min-h-screen">
            <AuthContextProvider>{children}</AuthContextProvider>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
