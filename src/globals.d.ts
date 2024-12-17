declare module "@fontsource/open-sans";

type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: string;
    temperature_2m_max: string;
    rain_sum: string;
    showers_sum: string;
    snowfall_sum: string;
    weather_code: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    weather_code: number[];
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
};
