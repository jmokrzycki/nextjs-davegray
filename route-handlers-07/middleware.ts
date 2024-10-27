import { NextResponse } from "next/server";

// const allowedOrigins = process.env.NODE_ENV === 'production'
//   ? ['https://www.yoursite.com', 'https://yoursite.com']
//   : ['https://localhost:3000', 'https://www.google.com']

export function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log(origin);

  //if we have origin and it's not on a list or !origin (block rest API tools)
  // CORS settings
  // test on google.com open console and fetch('http://localhost:3000/api/todos')
  // if (origin && !allowedOrigins.includes(origin) || !origin) {
  //   return new NextResponse(null, {
  //     status: 400,
  //     statusText: "Bad Request",
  //     headers: {
  //       'Content-type': 'text/plain'
  //     }
  //   })
  // }

  // const regex = new RegExp("/api/*");
  // if (regex.test(request.url)) {}

  console.log("middleware");

  console.log(request.method);
  console.log(request.url);

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:patch*",
};
