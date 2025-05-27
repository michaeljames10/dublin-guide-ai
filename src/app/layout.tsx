import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Dublin Life Guide – Homes, Rentals & Local Finds",
  description:
    "Thinking of living in Dublin? Find the best places to rent or buy, explore top things to do, and get real tips on making the city feel like home.",
  keywords: [
    "Living in Dublin",
    "Dublin guide",
    "Renting in Dublin",
    "Buying property in Dublin",
    "Dublin neighborhoods",
    "Things to do in Dublin",
    "Dublin real estate",
    "Dublin rentals",
    "Dublin housing market",
    "Best areas to live in Dublin",
    "Dublin travel tips",
    "Local Dublin experiences",
    "Moving to Dublin",
    "Dublin lifestyle",
    "Explore Dublin",
  ],
};

const theme = createTheme({
  primaryColor: "green",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MantineProvider theme={theme}>
          <Header />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
