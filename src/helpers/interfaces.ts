export interface IKeyable {
  [key: string | number]: any;
}

export interface IWeatherObj {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IOpenWeatherData {
  timezone: number;
  base: string;
  id: number;
  name: string;
  cod: number;
  visibility: number;
  weather: IWeatherObj[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: string;
    sunset: string;
  };
  coord: {
    lon: number;
    lat: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  snow: IKeyable;
  clouds: IKeyable;
  dt: number;
}
