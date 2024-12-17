import { useContext } from "react";
import styles from './WeatherWidget.module.css';
import CitySearch from "../CitySearch/CitySearch";
import ForecastWeatherCard from "../ForecastWeatherCard/ForecastWeatherCard";
import TodayWeatherCard from "../TodayWeatherCard/TodayWeatherCard";
import { WeatherContext } from "../../providers/WeatherProvider/WeatherProvider";

const FORECAST_RANGE = [1, 6];

const WeatherWidget = () => {
  const { hasError, isLoading, data: cityWeather } = useContext(WeatherContext);

  const days = cityWeather?.daily?.time?.slice(...FORECAST_RANGE) ?? [];
  const temperatures = cityWeather?.daily?.temperature_2m_max?.slice(...FORECAST_RANGE) ?? [];
  const weatherCodes = cityWeather?.daily?.weather_code?.slice(...FORECAST_RANGE) ?? [];

  
  return <div className={styles.widget}>
    <CitySearch />
    {hasError && <div className={styles.error}>Failed to get data for this city</div>}
    {!hasError && !isLoading && days.length > 0 && (
      <>
      <TodayWeatherCard/>
      <div className={styles.forecastSection}>
        {days?.map((day, i) => {
          
          return <ForecastWeatherCard date={new Date(day)} temperature={temperatures[i]} weatherCode={weatherCodes[i]} />
        })}
      </div>
      </>
    )}
  </div>
}

export default WeatherWidget;