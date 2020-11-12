import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Weather } from "@/interfaces/Weather";

@Module({
  name: "weather",
  stateFactory: true,
  namespaced: true
})
export default class WeatherStore extends VuexModule {
  data?: Weather;

  @Mutation
  insertWeatherData(payload: Weather): void {
    console.log("mutation", payload);

    this.data = payload;
  }

  get weatherData(): Weather | undefined {
    console.log("getter", this.data);

    return this.data;
  }
}
