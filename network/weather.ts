import { Coords, Weather } from "@/interfaces/Weather";
import { $axios } from "@/utils/api";
import { camelizeKeys } from "humps";

export class WeatherData {
  private readonly apiKey = "493f1ca161dbe3d505b2941cb4166dfc";
  private readonly openWeatherMap =
    "https://api.openweathermap.org/data/2.5/weather?";

  async downloadData(coords?: Coords, city?: string): Promise<Weather | boolean> {
    let urlPl
    let urlEn
    if (coords) {
      urlPl = `${this.openWeatherMap}${this.url("pl", coords)}`
      urlEn = `${this.openWeatherMap}${this.url("en", coords)}`
    } else {
      urlPl = `${this.openWeatherMap}${this.url("pl", undefined, city)}`
      urlEn = `${this.openWeatherMap}${this.url("en", undefined, city)}`
    }
    try {
      let data = await $axios.$get(urlPl);
      let enDesc = await $axios.$get(urlEn);
      enDesc = enDesc.weather[0].description;

      data.weather[0].description = {
        pl: data.weather[0].description,
        en: enDesc
      };
      const returnData = camelizeKeys(data) as unknown;

      return returnData as Weather;
    } catch {
      // throw new Error(e);
      return false
    }
  }

  url(lang: string, coords?: Coords, city?: string): string {
    if (coords) {
      return `lat=${coords.lat}&lon=${coords.lon}&lang=${lang}&units=metric&appid=${this.apiKey}`;
    } else {
      return `q=${city}&lang=${lang}&units=metric&appid=${this.apiKey}`;
    }
  }
}
