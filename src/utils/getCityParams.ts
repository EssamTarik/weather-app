const getCityParams = async (cityName: string) => {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)
  const jsonData = await response.json();
  const results = jsonData.results;
  if (!Array.isArray(results)) {
    throw new Error('invalid results');
  }
  return results[0];
}

export default getCityParams;