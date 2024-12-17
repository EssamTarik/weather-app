import { useContext } from "react";
import { WeatherContext } from "../../providers/WeatherProvider/WeatherProvider";
import formatDateTime from "../../utils/formatDateTime";
import formatTemperature from "../../utils/formatTemperature";
import getWeatherImage from "../../utils/getWeatherImage";
import styles from './styles.module.css';

const TodayWeatherCard = () => {
  const { data, cityName } = useContext(WeatherContext);
  const hourly = data?.hourly;
  if (!hourly) {
    return null;
  }
  const now = new Date();
  const dataIndex = now.getHours();

  const timeString = hourly?.time?.[dataIndex]
  const time = timeString && new Date(timeString);
  const hourTemperature = hourly?.temperature_2m?.[dataIndex];
  const hourWeatherCode = hourly?.weather_code?.[dataIndex];

  const weatherCode= hourWeatherCode
  const temperature=hourTemperature

  return <div className={styles.card}>
    <img className={styles.weatherImg} src={getWeatherImage(weatherCode)} />
    <div className={styles.info}>
      <div className={styles.temp}>{formatTemperature(temperature)}</div>
      <div className={styles.cityName}>{cityName}</div>
      {time instanceof Date && <div className={styles.date}>{formatDateTime(time)}</div>}
    </div>
  </div>
}

export default TodayWeatherCard;