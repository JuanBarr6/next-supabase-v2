import "./globals.css";

import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
// import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
// import { Geist } from "next/font/google";
// import { ThemeProvider } from "next-themes";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

// const geistSans = Geist({
//   display: "swap",
//   subsets: ["latin"],
// });
//
//
// className={geistSans.className}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background  p-0 m-0">
        {/*<ThemeProvider*/}
        {/*  attribute="class"*/}
        {/*  // defaultTheme="system"*/}
        {/*  enableSystem*/}
        {/*  disableTransitionOnChange*/}
        {/*>*/}
        <main className="h-screen w-full flex flex-col">
          <nav className="w-full h-16  flex justify-center border-b border-b-foreground/10 ">
            <div className="w-full flex p-3 px-5 justify-end text-sm ">
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </nav>

          <div className="flex-grow flex w-full flex-col overflow-y-auto">
            {children}
          </div>
        </main>
        {/*</ThemeProvider>*/}
      </body>
    </html>
  );
}
