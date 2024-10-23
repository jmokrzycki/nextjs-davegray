import React from "react";
import Link from "next/link";

export default async function About() {
  //   await new Promise((resolve) => setTimeout(resolve, 500));
  //   throw new Error("Error thrown in About page");
  return (
    <>
      <h1>About</h1>
      <Link href="/">Link to Home Page</Link>
    </>
  );
}
