import getCityParams from './getCityParams';

const getWeatherData = async ({ longitude, latitude }: { latitude: number, longitude: number }): Promise<WeatherData> => {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,rain_sum,showers_sum,snowfall_sum,weather_code&hourly=temperature_2m,weather_code`;
  const response = await fetch(url);
  return response.json()
}

const getCityWeather = async (cityName: string) => {
  const params = await getCityParams(cityName);
  const weatherData = await getWeatherData(params);

  return weatherData;
}

export default getCityWeather;