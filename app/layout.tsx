import "./globals.css";
import Navbar from "./root-Components/tools-Components/NavBar";
import { AuthContextProvider } from "./Store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navbar />
        <div className="h-16 mb-0 sm:mb-3"></div>
        <div className="bg-gray-300 min-h-screen">
          <AuthContextProvider>{children}</AuthContextProvider>
        </div>
      </body>
    </html>
  );
}
