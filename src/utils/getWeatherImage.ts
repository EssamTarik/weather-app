import sun from '../assets/sun.png'
import cloudSun from '../assets/cloud-sun.png';
import cloudy from '../assets/cloudy.png';
import storm from '../assets/storm.png';

function getWeatherImage(wmoCode: number): string {
  if (wmoCode === 0) {
      return sun; // Clear sky
  } else if (wmoCode >= 1 && wmoCode <= 3) {
      return cloudSun; // Partly cloudy or mainly clear
  } else if (wmoCode >= 4 && wmoCode <= 6) {
      return cloudy; // Cloudy or overcast
  } else if (wmoCode >= 45 && wmoCode <= 48) {
      return cloudy; // Cloudy or overcast
  } else if (wmoCode >= 51 && wmoCode <= 55) {
      return storm; // Drizzle
  } else if (wmoCode >= 61 && wmoCode <= 65) {
      return storm; // Rain (light, moderate, or heavy)
  } else if (wmoCode >= 95 && wmoCode <= 99) {
      return storm; // Rain (light, moderate, or heavy)
  }

  return sun; // Clear sky
}

export default getWeatherImage;