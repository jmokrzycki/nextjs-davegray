"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(0);
  return (
    <html lang="en">
      <body className={`${inter.className} p-8`}>
        L<button onClick={() => setCounter(counter + 1)}>[{counter}]</button>
        <Header />
        {children}L
      </body>
    </html>
  );
}
