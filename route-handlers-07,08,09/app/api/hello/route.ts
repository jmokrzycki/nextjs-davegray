import { NextResponse } from "next/server";
import { limiter } from "../config/limiter";

export async function GET(request: Request) {
  const origin = request.headers.get("origin");

  const remaining = await limiter.removeTokens(1);
  console.log(`Remaining: ${remaining}`);

  if (remaining < 0) {
    return NextResponse.json(null, {
      status: 429,
      statusText: "Too many requests",
      headers: {
        "Access-Control-Allow-Origin": origin || "*",
        "Content-type": "text/plain",
      },
    });
  }

  return NextResponse.json({ message: "Hello, world!" });
}

// export async function GET() {
//   return NextResponse.json({ message: "Hello, world!" });
// }

//http://localhost:3000/api/hello
