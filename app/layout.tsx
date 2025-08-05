import FooterComponent from "@/components/footer";
import HeaderComponent from "@/components/header";
import localFont from "next/font/local";
import { Metadata } from "next/types";
import "./globals.css";
const myFont = localFont({
  src: "../public/HousttelySignature-GOonZ.ttf",
  variable: "--font-house",
});

export const metadata: Metadata = {
  title: "Kirhillah & Shannah",
  description: "Luxury, Royalty & Realty",
  icons: {
    icon: "/favicon.ico", // relative to /public folder
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body data-barba="wrapper">
        <div className="content_container bg-white">
          <HeaderComponent />
          {children}
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}