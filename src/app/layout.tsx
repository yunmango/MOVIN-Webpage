import type { Metadata } from "next";
import { darkerGrotesque, instrumentSans, sora, lato } from "@/lib/fonts";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOVIN - Real-time Motion Capture",
  description:
    "Real-time motion capture, made interactive. Build interactive experiences with live motion data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${darkerGrotesque.variable} ${instrumentSans.variable} ${sora.variable} ${lato.variable} font-sans antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
