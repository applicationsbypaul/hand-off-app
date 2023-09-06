import books from "./data.json";
import { NextResponse } from "next/server";
export async function GET(req) {
  const res = await fetch("http://localhost:5232/api/Employee");
  return NextResponse.json(res);
}
