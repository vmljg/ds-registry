import { NextResponse } from "next/server";
import type { OpenWeatherResponse, Units } from "@/lib/weather";
import { normalizeFromOpenWeather } from "@/lib/weather";

const OPENWEATHER_BASE = "https://api.openweathermap.org/data/2.5/weather";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q");
  const unitsParam = (searchParams.get("units") as Units | null) ?? "imperial";

  if (!q) {
    return NextResponse.json({ error: "Missing query parameter 'q'" }, { status: 400 });
  }

  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Server missing OPENWEATHER_API_KEY" }, { status: 500 });
  }

  const url = `${OPENWEATHER_BASE}?q=${encodeURIComponent(q)}&appid=${apiKey}&units=${unitsParam}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    const data = (await res.json()) as any;

    if (!res.ok) {
      const message = data?.message === "city not found" ? "Location not found" : data?.message || "Request failed";
      const status = data?.cod && Number.isFinite(Number(data.cod)) ? Number(data.cod) : res.status;
      return NextResponse.json({ error: message }, { status });
    }

    const normalized = normalizeFromOpenWeather(data as OpenWeatherResponse, unitsParam);
    return NextResponse.json(normalized, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
