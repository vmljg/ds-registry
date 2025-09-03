"use client";

import { useCallback, useEffect, useMemo, useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { NormalizedWeather, Units } from "@/lib/weather";
import { toCelsius, toFahrenheit } from "@/lib/weather";
import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudDrizzle,
  CloudSnow,
  CloudLightning,
  CloudFog,
  Wind,
} from "lucide-react";

interface WeatherWidgetProps {
  defaultQuery?: string; // e.g., "Kansas City, US"
  defaultUnits?: Units; // "imperial" | "metric"
}

function IconForKey({ keyName }: { keyName: NormalizedWeather["iconKey"] }) {
  const map = {
    Sun: Sun,
    Cloud: Cloud,
    CloudSun: CloudSun,
    CloudRain: CloudRain,
    CloudDrizzle: CloudDrizzle,
    CloudSnow: CloudSnow,
    CloudLightning: CloudLightning,
    CloudFog: CloudFog,
    Wind: Wind,
    Cloudy: Cloud,
  } as const;
  const Cmp = map[keyName] ?? Sun;
  return <Cmp aria-hidden className="size-6" />;
}

export function WeatherWidget({ defaultQuery = "Kansas City, US", defaultUnits = "imperial" }: WeatherWidgetProps) {
  const [query, setQuery] = useState<string>(defaultQuery);
  const [units, setUnits] = useState<Units>(defaultUnits);
  const [data, setData] = useState<NormalizedWeather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const displayTemp = useMemo(() => {
    if (!data) return "--";
    return units === "imperial" ? `${data.temperatureF}°F` : `${data.temperatureC}°C`;
  }, [data, units]);

  const fetchWeather = useCallback(
    (q: string, u: Units) => {
      setError(null);
      startTransition(async () => {
        try {
          const res = await fetch(`/api/weather?q=${encodeURIComponent(q)}&units=${u}`, { cache: "no-store" });
          const json = await res.json();
          if (!res.ok) {
            setError(json?.error ?? "Request failed");
            return;
          }
          setData(json as NormalizedWeather);
        } catch (_e) {
          setError("Unexpected error");
        }
      });
    },
    []
  );

  // initial load
  useEffect(() => {
    fetchWeather(query, units);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSearch() {
    fetchWeather(query, units);
  }

  function onToggleUnits() {
    setUnits(prev => {
      const next = prev === "imperial" ? "metric" : "imperial";
      // convert locally if we already have data
      setData(curr => {
        if (!curr) return curr;
        if (next === "imperial") {
          const f = curr.temperatureF ?? toFahrenheit(curr.temperatureC);
          return { ...curr, temperatureF: Math.round(f) };
        }
        const c = curr.temperatureC ?? toCelsius(curr.temperatureF);
        return { ...curr, temperatureC: Math.round(c) };
      });
      return next;
    });
  }

  function onRefresh() {
    if (!data) {
      fetchWeather(query, units);
      return;
    }
    fetchWeather(data.location, units);
  }

  return (
    <section
      role="region"
      aria-label="Weather widget"
      className="grid gap-3 rounded-lg border p-4 [container-type:inline-size]"
    >
      <form
        className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-2"
        onSubmit={e => {
          e.preventDefault();
          onSearch();
        }}
      >
        <label htmlFor="weather-q" className="sr-only">
          Location
        </label>
        <Input
          id="weather-q"
          placeholder="Search location..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Location"
        />
        <Button type="submit" aria-label="Search weather">
          Search
        </Button>
        <Button type="button" variant="secondary" onClick={onToggleUnits} aria-label="Toggle temperature units">
          Toggle Units
        </Button>
      </form>

      <div className="min-h-24 grid grid-cols-[auto_1fr_auto] items-center gap-3 contain-content" aria-live="polite">
        {isPending && (
          <div className="col-span-3 text-sm text-muted-foreground">Loading...</div>
        )}

        {error && !isPending && (
          <div className="col-span-3 text-sm text-destructive" role="alert">
            {error}
          </div>
        )}

        {!error && data && (
          <>
            <div className="flex items-center justify-center rounded-md bg-secondary p-2">
              <IconForKey keyName={data.iconKey} />
            </div>
            <div className="grid">
              <div className="text-lg font-medium leading-none">{data.location}</div>
              <div className="text-sm text-muted-foreground">{data.condition}</div>
            </div>
            <div className="text-2xl font-semibold tabular-nums">{displayTemp}</div>
          </>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">
          Last updated: {data ? new Date(data.lastUpdated).toLocaleString() : "--"}
        </div>
        <Button type="button" variant="outline" size="sm" onClick={onRefresh} aria-label="Refresh weather">
          Refresh
        </Button>
      </div>
    </section>
  );
}
