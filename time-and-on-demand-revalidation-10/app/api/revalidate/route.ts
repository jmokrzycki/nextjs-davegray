// https://<your-site.com>/api/revalidate?secret=<token>
// http://localhost:3000/api/revalidate?path=/&secret=123qwe
// path=/ - rewalidacja homepage

// wejsc na adres http://localhost:3000/api/revalidate?path=/&secret=123qwe, zeby przebudowac


import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from 'next/cache';

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const secret = url.searchParams.get('secret');
    const path = url.searchParams.get('path') || '/';

    if (secret !== process.env.MY_SECRET_TOKEN) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    try {
        await revalidatePath(path);
        return NextResponse.json({ revalidated: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
    }
}
