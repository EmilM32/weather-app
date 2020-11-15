import { Coords, Weather } from "~/interfaces/Weather";
import { $axios } from "~/utils/api";

export class WeatherData {
  private readonly apiKey = "493f1ca161dbe3d505b2941cb4166dfc";
  private readonly openWeatherMap =
    "https://api.openweathermap.org/data/2.5/weather?";

  async downloadData(coords: Coords) {
    try {
      let data = await $axios.$get(
        `${this.openWeatherMap}${this.url(coords, "pl")}`
      );
      let enDesc = await $axios.$get(
        `${this.openWeatherMap}${this.url(coords, "en")}`
      );
      enDesc = enDesc.weather[0].description;

      data.weather[0].description = {
        pl: data.weather[0].description,
        en: enDesc
      };

      return data;
    } catch (e) {
      throw new Error(e);
    }
  }

  url(coords: Coords, lang: string): string {
    return `lat=${coords.lat}&lon=${coords.lon}&lang=${lang}&units=metric&appid=${this.apiKey}`;
  }
}
