import { createContext, useCallback, useState } from "react";
import getCityWeather from "../../utils/getCityWeather";

interface WeatherDataState {
  data?: WeatherData;
  isLoading: boolean;
  hasError: boolean;
  cityName: string;
  searchCityWeather: (cityName: string) => void;
}

const initialState: WeatherDataState = {
  data: undefined,
  isLoading: false,
  hasError: false,
  cityName: '',
  searchCityWeather: () => null,
}

export const WeatherContext = createContext<WeatherDataState>(initialState);

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [cityName, setCityName] = useState('');
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cityWeather, setCityWeather] = useState<WeatherData>()

  const searchCityWeather = useCallback(async (newCityName: string) => {
    try {
      setIsLoading(true);
      setCityWeather(await getCityWeather(newCityName));
      setCityName(newCityName);
      setHasError(false);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return <WeatherContext.Provider value={{
    ...initialState,
    searchCityWeather,
    cityName,
    isLoading,
    hasError,
    data: cityWeather,
  }}>
    {children}
  </WeatherContext.Provider>
}

export default WeatherProvider;