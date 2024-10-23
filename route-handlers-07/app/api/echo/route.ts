import { NextResponse } from "next/server";

// strict parameters

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const name = searchParams.get("name");
//   const instrument = searchParams.get("instrument");

//   return NextResponse.json({ name, instrument });
// }

//http://localhost:3000/api/echo?name=Jarek&instrument=Guitar

// dynamic parameters

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj);
}

//http://localhost:3000/api/echo?parameter1=value1&parameter2=value2&parameter3=value3
