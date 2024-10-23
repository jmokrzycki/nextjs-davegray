"use client";

import { usePathname } from "next/navigation";

import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [counter, setCounter] = useState(0);

  return (
    <div className="animate-appear p-4">
      T<pre className="inline-block bg-muted px-2 py-1 rounded-lg">{pathname}</pre>
      <button onClick={() => setCounter(counter + 1)}>[{counter}]</button>
      {children}T
    </div>
  );
}
