import "./globals.css";
import Image from "next/image";
import Corner from "@/public/assets/top-left-img.png";
import Links from "@/components/Links";
import NavBar from "@/components/NavBar";
import PageTransition from "@/components/PageTransition";

// Load Geist Sans font

export const metadata = {
  title: "ethan smith",
  description: "portfolio app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={``}>
      <body className="antialiased flex flex-col min-h-screen relative overflow-hidden">
        <PageTransition>{children}</PageTransition>

        <div className="absolute top-0 left-0 mix-blend-color-dodge w-52 z-10">
          <Image width={400} height={400} src={Corner} alt="corner" />
        </div>
        <NavBar />
        <Links />
      </body>
    </html>
  );
}
