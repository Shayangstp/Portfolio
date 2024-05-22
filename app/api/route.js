import { NextRespnse } from "next/server";

export async function GET() {
  return NextRespnse.json({
    message: "shayan",
  });
}
