import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PropsWithChildren } from "react";
import clsx from "clsx";
import { Providers } from "./providers";
import AwaitingDialog from "@/components/AwaitingDialog";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Fushuma Lauchpads",
};

interface RootLayoutProps extends PropsWithChildren {}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="min-h-[100%]" lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={clsx(
          montserrat.className,
          "bg-global dark:bg-global-dark duration-200 font-medium h-full"
        )}
      >
        <Providers>
          <div className="grid min-h-[100vh] grid-rows-layout">
            <Header />
            <div>{children}</div>
            <Footer />
          </div>
          <AwaitingDialog />
        </Providers>
      </body>
    </html>
  );
}
