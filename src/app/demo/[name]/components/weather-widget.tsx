import { WeatherWidget } from "@/components/weather-widget";

export const weatherWidget = {
  name: "weather-widget",
  components: {
    Default: <WeatherWidget defaultQuery="Kansas City, US" defaultUnits="imperial" />,
  },
};
