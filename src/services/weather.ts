export const getWeatherData = async (city: string) => {
  try {
    const getWeatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
    );
    const data = await getWeatherData.json();
    return data;
  } catch (err) {
    throw new Error(err as string);
  }
}
