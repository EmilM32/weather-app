<template>
  <div class="d-flex justify-center">
    <WeatherView :weather="weather" v-if="!loadingData" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Coords, Weather } from "@/interfaces/Weather";
import { WeatherData } from "@/network/weather";

@Component
export default class Main extends Vue {
  weatherData = new WeatherData();

  weather?: Weather;
  loadingData = true;

  mounted() {
    const storeData = this.$store.getters["weather/weatherData"];
    console.log("storedata", storeData);
    if (storeData) {
      console.log("if", storeData);
      this.weather = storeData;
      this.loadingData = false;
    } else {
      console.log("else");
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userCoords: Coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          this.weather = await this.weatherData.downloadData(userCoords);
          this.loadingData = false;
          this.$store.commit("weather/insertWeatherData", this.weather);
        },
        (error) => {
          throw new Error(error.message);
        }
      );
    }
  }
}
</script>
