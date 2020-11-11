import { Coords, Weather } from "~/interfaces/Weather";
import { $axios } from "~/utils/api";

export class WeatherData {
  private readonly apiKey = "493f1ca161dbe3d505b2941cb4166dfc";
  private readonly openWeatherMap =
    "https://api.openweathermap.org/data/2.5/weather?";

  async downloadData(coords: Coords) {
    const url = `lat=${coords.lat}&lon=${coords.lon}&lang=pl&units=metric&appid=${this.apiKey}`;
    try {
      const data: Weather = await $axios.$get(`${this.openWeatherMap}${url}`);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }
}
