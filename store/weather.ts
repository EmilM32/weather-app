import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Coords, Weather } from "@/interfaces/Weather";

@Module({
  name: "weather",
  stateFactory: true,
  namespaced: true
})
export default class WeatherStore extends VuexModule {
  private data: Weather = {
    base: "",
    clouds: { all: 0 },
    cod: 0,
    coord: { lat: 0, lon: 0 },
    dt: 0,
    id: 0,
    main: {
      feelsLike: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      tempMax: 0,
      tempMin: 0
    },
    name: "",
    sys: {
      country: "",
      id: 0,
      sunrise: 0,
      sunset: 0,
      type: 0
    },
    timezone: 0,
    visibility: 0,
    weather: [],
    wind: { deg: 0, speed: 0 }
  };
  private coords: Coords = {
    lat: 0,
    lon: 0
  };

  @Mutation
  insertWeatherData(payload: Weather): void {
    this.data = payload;
  }

  @Mutation
  insertUserCoords(payload: Coords): void {
    this.coords = payload;
  }

  get weatherData(): Weather {
    return this.data;
  }

  get userCoords(): Coords {
    return this.coords;
  }
}
