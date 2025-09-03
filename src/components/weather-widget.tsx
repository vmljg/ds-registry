"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Toggle } from "@/components/ui/toggle";
import { AlertCircle, RefreshCw, Search, Thermometer } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface WeatherData {
  location: string;
  country: string;
  temperature: number;
  condition: string;
  icon: string;
  timestamp: string;
}

export function WeatherWidget({
  defaultLocation = "Kansas City, Missouri",
}: {
  defaultLocation?: string;
}) {
  const [location, setLocation] = useState<string>(defaultLocation);
  const [searchInput, setSearchInput] = useState<string>("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCelsius, setIsCelsius] = useState<boolean>(false); // Default to Fahrenheit for US locations
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchWeather = useCallback(async (searchLocation: string) => {
    setLoading(true);
    setError(null);

    try {
      const API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY || process.env.OPENWEATHER_API_KEY;
      
      if (!API_KEY) {
        setError("API key is required. Please set OPENWEATHER_API_KEY in your environment variables.");
        setLoading(false);
        return;
      }
      
      // Get the current state for units to avoid closure issues
      // This ensures we always use the latest unit preference
      const currentIsCelsius = isCelsius;
      const units = currentIsCelsius ? 'metric' : 'imperial';
      
      console.log(`Fetching weather with units: ${units} (${currentIsCelsius ? 'Celsius' : 'Fahrenheit'})`);
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchLocation}&appid=${API_KEY}&units=${units}`
      );
      
      const weatherData = await response.json();
      
      if (weatherData.cod !== 200) {
        setError(weatherData.message || "Location not found. Please try again.");
        setLoading(false);
        return;
      }

      const now = new Date().toLocaleTimeString();

      setWeatherData({
        location: weatherData.name,
        country: weatherData.sys.country,
        temperature: weatherData.main.temp,
        condition: weatherData.weather[0].main,
        icon: weatherData.weather[0].icon,
        timestamp: now,
      });

      setLastUpdated(now);
      setLocation(`${weatherData.name}, ${weatherData.sys.country}`);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error("Error fetching weather data:", err);
    } finally {
      setLoading(false);
    }
  }, []); // Remove isCelsius from dependencies

  // Initial fetch on component mount
  useEffect(() => {
    fetchWeather(defaultLocation);
  }, [defaultLocation, fetchWeather]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeather(searchInput);
    }
  };

  const handleRefresh = () => {
    fetchWeather(location);
  };

  const toggleTemperatureUnit = () => {
    setIsCelsius((prevIsCelsius) => {
      const newValue = !prevIsCelsius;
      console.log(`Toggling temperature unit to: ${newValue ? 'Celsius' : 'Fahrenheit'}`);
      
      // After state update, refetch weather data for the current location
      setTimeout(() => {
        fetchWeather(location);
      }, 0);
      
      return newValue;
    });
  };

  // Display temperature in the selected unit
  const displayTemperature = () => {
    if (!weatherData) return "";
    
    // Format the temperature with the correct unit symbol
    const temp = weatherData.temperature;
    return `${temp.toFixed(1)}°${isCelsius ? 'C' : 'F'}`;
  };

  // Get weather icon based on condition
  const getWeatherIcon = () => {
    if (!weatherData) return <Thermometer className="h-12 w-12 text-primary" />;

    // Map weather conditions to Lucide icons
    // In a real implementation, you would use the actual weather icons from OpenWeatherMap
    switch (weatherData.condition.toLowerCase()) {
      case "clear":
      case "sunny":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-amber-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        );
      case "cloudy":
      case "partly cloudy":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
        );
      case "rainy":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-blue-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
            <path d="M16 14v6" />
            <path d="M8 14v6" />
            <path d="M12 16v6" />
          </svg>
        );
      default:
        return <Thermometer className="h-12 w-12 text-primary" />;
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl">Weather</CardTitle>
        <CardDescription>Current weather conditions</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Search form */}
        <form onSubmit={handleSearch} className="flex space-x-2">
          <Input
            type="text"
            placeholder="Enter location..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="flex-1"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
        </form>

        {/* Error message */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {/* Weather display */}
        <div className="pt-2">
          {loading ? (
            <div className="space-y-3">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ) : (
            weatherData && (
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-4">
                  {getWeatherIcon()}
                  <div className="text-4xl font-bold flex items-center gap-2">
                    {displayTemperature()}
                  </div>
                </div>
                <div className="mt-2 text-xl">{weatherData.condition}</div>
                <div className="mt-1 text-muted-foreground">
                  {weatherData.location}
                </div>
              </div>
            )
          )}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 text-xs text-muted-foreground">
        <div>{lastUpdated && `Last updated: ${lastUpdated}`}</div>
        <div className="flex gap-2">
          <Toggle
            aria-label="Toggle temperature unit"
            pressed={isCelsius}
            onPressedChange={toggleTemperatureUnit}
            size="sm"
          >
            {isCelsius ? "°C" : "°F"}
          </Toggle>
          <Button
            variant="outline"
            size="icon"
            onClick={handleRefresh}
            className="h-8 w-8"
          >
            <RefreshCw className="h-4 w-4" />
            <span className="sr-only">Refresh</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
