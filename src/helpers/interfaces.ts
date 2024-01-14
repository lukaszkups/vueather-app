import type { notificationTypeEnum } from "./dictionaries";

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


export interface IWikiContentUrlSet {
  page: string;
  revisions: string;
  edit: string;
  talk: string;
}
export interface IRandomWikiArticle {
  type: string;
  title: string;
  displaytitle: string;
  namespace: {
    id: number;
    text: string;
  },
  wikibase_item: string;
  titles: {
    canonical: string;
    normalized: string;
    display: string;
  },
  pageid: number;
  lang: string;
  dir: string;
  revision: string;
  tid: string;
  timestamp: string;
  description: string;
  description_source: string;
  content_urls: {
    desktop: IWikiContentUrlSet;
    mobile: IWikiContentUrlSet;
  },
  extract: string;
  extract_html: string;
}

export interface IToastNotification {
  id: number | string;
  title: string;
  url: string;
  type: notificationTypeEnum;
}
