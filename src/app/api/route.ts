import OpenAI from "openai";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, quality, style, size } = body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const image = await openai.images.generate({
      model: "dall-e-3",
      n: 1,
      quality: quality || "hd",
      style: style || "vivid",
      size: size || "1024x1024",
      prompt: prompt,
    });

    return new NextResponse(JSON.stringify({ image: image.data[0].url }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e: any) {
    console.error(e);

    return new NextResponse(JSON.stringify({ error: e.error.message }), {
      status: e.status,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
