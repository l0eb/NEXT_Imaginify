import type { Metadata } from "next";

import { cn } from "@/lib/utils";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = { variable: '' };

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/" appearance={{
      variables:{colorPrimary : '#624cf5'}
    }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased",IBMPlex.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
 