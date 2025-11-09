import { NextResponse } from "next/server";

export async function middleware(request) {
   await NextResponse.next()
}