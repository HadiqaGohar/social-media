import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";



export const metadata: Metadata = {
  title: "HG Social Media App ",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
