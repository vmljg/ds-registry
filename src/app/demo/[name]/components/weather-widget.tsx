import { WeatherWidget } from "@/components/weather-widget";

export const weatherWidget = {
  name: "weather-widget",
  components: {
    Default: (
      <div className="p-6 max-w-md mx-auto">
        <WeatherWidget defaultLocation="Kansas City, Missouri" />
      </div>
    ),
  },
};
