import { FormEventHandler, useContext, useState } from "react";
import CityInput from "../CityInput/CityInput";
import styles from './styles.module.css';
import { WeatherContext } from "../../providers/WeatherProvider/WeatherProvider";

const CitySearch = () => {
  const { searchCityWeather, isLoading } = useContext(WeatherContext);
  const [cityName, setCityName] = useState('');
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event?.preventDefault();
    searchCityWeather(cityName);
  }

  return (
    <form className={styles.citySearchForm} onSubmit={handleSubmit}>
      <CityInput value={cityName} onChange={setCityName} />
      <button className={styles.searchButton} type='submit'>
        Search
        {isLoading && <span className={styles.spinner} />}
      </button>
    </form>
  )
}

export default CitySearch;