import { capitalizeFirstLetter } from "@/helpers/converters";
import { notifyAboutError } from "@/helpers/utils";

export const getWeatherData = async (city: string) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
  );
  const data = await response.json();
  if (response.status === 200) {
    return Promise.resolve(data);
  } else {
    notifyAboutError(`ERROR: ${capitalizeFirstLetter(data.message || data)}`);
    return Promise.reject();
  }
}
