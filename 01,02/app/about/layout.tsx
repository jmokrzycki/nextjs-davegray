import React from "react";
import styles from "./styles.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "About page description",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav>About navbar (layout 1)</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
