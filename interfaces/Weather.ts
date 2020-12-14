export interface Coords {
  lat: number;
  lon: number;
}

interface WeatherMain {
  feelsLike: number;
  humidity: number;
  pressure: number;
  temp: number;
  tempMax: number;
  tempMin: number;
}

interface SysInfo {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface WeatherInfo {
  description: { pl: string; en: string };
  icon: string;
  id: number;
  main: string;
}

export interface Weather {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: Coords;
  dt: number;
  id: number;
  main: WeatherMain;
  name: string;
  sys: SysInfo;
  timezone: number;
  visibility: number;
  weather: Array<WeatherInfo>;
  wind: {
    deg: number;
    speed: number;
  };
}
