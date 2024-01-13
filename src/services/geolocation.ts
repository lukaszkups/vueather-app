// Not being used anywhere, TBC
export default async function getCityCoords(city: string) {
  try {
    const getCityCoords = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`
    );
    const data = await getCityCoords.json();
    return data;
  } catch (err) {
    throw new Error(err as string);
  }
}
