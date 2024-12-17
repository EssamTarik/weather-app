import classNames from 'classnames'
import getWeatherImage from "../../utils/getWeatherImage";
import styles from './styles.module.css';
import getDayName from '../../utils/getDayName';
import formatTemperature from '../../utils/formatTemperature';

interface Props {
  date: Date;
  temperature: number;
  weatherCode: number;
  className?: string;
}
const ForecastWeatherCard = ({ weatherCode, temperature, date, className }: Props) => {
  const day = getDayName(date);
  return (
    <div className={classNames(styles.card, className)}>
      <img className={styles.weatherImg} src={getWeatherImage(weatherCode)} />
      <div className={styles.info}>
        <div className={styles.day}>{day}</div>
        <div className={styles.day}>{formatTemperature(temperature)}</div>
      </div>
    </div>
  );
}

export default ForecastWeatherCard;