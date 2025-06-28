import "@/styles/globals.css";
import { Link } from "@heroui/link";
import clsx from "clsx";
import Navigation from "../components/Navigation";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontRaleway, fontSans } from "@/config/fonts";
import Footer from '../components/Footer';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontRaleway.className,
        )}
      >
        <Providers themeProps={{ attribute: "class" }}>
          <div className="relative flex flex-col h-screen px-6 sm:px-14">
            <Navigation />

            <main className="container mx-auto pt-16 px-6 sm:px-24 flex-grow">
              {children}
            </main>
            
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
