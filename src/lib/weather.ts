export type Units = "imperial" | "metric";

export interface NormalizedWeather {
  location: string; // e.g., "Kansas City, US"
  temperatureF: number;
  temperatureC: number;
  condition: string; // e.g., "Sunny", "Cloudy"
  iconKey: LucideIconKey; // client maps to Lucide icon
  lastUpdated: string; // ISO string
}

export type LucideIconKey =
  | "Sun"
  | "Cloud"
  | "CloudSun"
  | "CloudRain"
  | "CloudDrizzle"
  | "CloudSnow"
  | "CloudLightning"
  | "CloudFog"
  | "Wind"
  | "Cloudy";

export interface OpenWeatherResponse {
  name: string;
  sys: { country?: string };
  main: { temp: number };
  weather: Array<{ id: number; main: string; description: string; icon: string }>;
  dt: number; // unix seconds
}

export function toCelsius(fahrenheit: number): number {
  return Math.round(((fahrenheit - 32) * 5) / 9);
}

export function toFahrenheit(celsius: number): number {
  return Math.round((celsius * 9) / 5 + 32);
}

export function normalizeFromOpenWeather(data: OpenWeatherResponse, units: Units): NormalizedWeather {
  const country = data.sys?.country ?? "";
  const location = country ? `${data.name}, ${country}` : data.name;
  const temp = data.main?.temp ?? 0;

  let temperatureF: number;
  let temperatureC: number;
  if (units === "imperial") {
    temperatureF = Math.round(temp);
    temperatureC = toCelsius(temp);
  } else {
    temperatureC = Math.round(temp);
    temperatureF = toFahrenheit(temp);
  }

  const condition = pickConditionText(data);
  const iconKey = mapIconKey(data);

  return {
    location,
    temperatureF,
    temperatureC,
    condition,
    iconKey,
    lastUpdated: new Date(data.dt * 1000).toISOString(),
  };
}

function pickConditionText(data: OpenWeatherResponse): string {
  const first = data.weather?.[0];
  if (!first) return "Unknown";
  // Prefer capitalized description, fallback to main
  const desc = first.description?.trim();
  if (desc) return desc[0].toUpperCase() + desc.slice(1);
  return first.main ?? "Unknown";
}

// Map OpenWeather condition id to a Lucide icon key
// https://openweathermap.org/weather-conditions
export function mapIconKey(data: OpenWeatherResponse): LucideIconKey {
  const id = data.weather?.[0]?.id ?? 800;

  if (id >= 200 && id < 300) return "CloudLightning"; // Thunderstorm
  if (id >= 300 && id < 400) return "CloudDrizzle"; // Drizzle
  if (id >= 500 && id < 600) return "CloudRain"; // Rain
  if (id >= 600 && id < 700) return "CloudSnow"; // Snow
  if (id >= 700 && id < 800) return "CloudFog"; // Atmosphere (mist, smoke, etc.)
  if (id === 800) return "Sun"; // Clear
  if (id > 800) return "CloudSun"; // Clouds
  return "Cloud";
}
