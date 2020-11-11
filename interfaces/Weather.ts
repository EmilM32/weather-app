export interface Coords {
  lat: number;
  lon: number;
}

interface WeatherMain {
  feels_like: number
  humidity: number
  pressure: number
  temp: number
  temp_max: number
  temp_min: number
}

interface SysInfo {
  country: string
  id: number
  sunrise: number
  sunset: number
  type: number
}

interface WeatherInfo {
  description: string
  icon: string
  id: number
  main: string
}

export interface Weather {
  base: string
  clouds: { all: number }
  cod: number
  coord: Coords
  dt: number
  id: number
  main: WeatherMain
  name: string
  sys: SysInfo
  timezone: number
  visibility: number
  weather: Array<WeatherInfo>
  wind: {
    deg: number
    speed: number
  }
}