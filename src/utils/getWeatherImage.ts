function getWeatherImage(wmoCode: number): string {
  /**
   * Returns the corresponding weather image based on WMO weather code ranges.
   */
  if (wmoCode === 0) {
      return "/sun.png"; // Clear sky
  } else if (wmoCode >= 1 && wmoCode <= 3) {
      return "/cloud-sun.png"; // Partly cloudy or mainly clear
  } else if (wmoCode >= 4 && wmoCode <= 6) {
      return "/cloudy.png"; // Cloudy or overcast
  } else if (wmoCode >= 45 && wmoCode <= 48) {
      return "/cloudy.png"; // Cloudy or overcast
  } else if (wmoCode >= 51 && wmoCode <= 55) {
      return "/storm.png"; // Drizzle
  } else if (wmoCode >= 61 && wmoCode <= 65) {
      return "/storm.png"; // Rain (light, moderate, or heavy)
  } else if (wmoCode >= 95 && wmoCode <= 99) {
      return "/storm.png"; // Rain (light, moderate, or heavy)
  }

  return "/sun.png"; // Clear sky
}

export default getWeatherImage;