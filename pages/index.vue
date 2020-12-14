<template>
  <div class="d-flex justify-center">
    <WeatherView :weather="weather" v-if="weather.weather.length" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";
import { Coords, Weather } from "@/interfaces/Weather";
import { WeatherData } from "@/network/weather";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters({
      weather: "weather/weatherData",
    }),
  },
})
export default class Main extends Vue {
  $geolocation: any;

  weatherData = new WeatherData();
  weather!: Weather;

  @Watch("$geolocation.coords", { immediate: true, deep: true })
  onLoadingChanged(val: boolean, newVal: boolean) {
    if (this.$geolocation.coords) {
      const userCoords: Coords = {
        lat: this.$geolocation.coords.latitude,
        lon: this.$geolocation.coords.longitude,
      };

      if (!this.weather.weather.length) this.getWeather(userCoords);
    }
  }

  async getWeather(coords: Coords): Promise<void> {
    const weather = await this.weatherData.downloadData(coords);
    this.$store.commit("weather/insertWeatherData", weather);
  }
}
</script>
