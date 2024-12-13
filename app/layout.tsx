import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "../components/ui/Header";


export const metadata: Metadata = {
  title: "Toledo Viajes",
  description: "Toledo Viajes - Guía de la ciudad de Toledo y viajes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
      >
        <Analytics />
        <SessionProvider>
          <Header />
        {children}
        </SessionProvider>
      </body>
    </html>
  );
}
