<template>
  <v-row no-gutters>
    <v-btn v-for="lang in languages" :key="lang" icon @click="changeLang(lang)">
      <img :src="`/flags/${lang}.svg`" width="20" :alt="lang" />
    </v-btn>
    <v-spacer />
    <v-btn icon @click="cityInputDialogModel = true">
      <v-icon>mdi-city</v-icon>
    </v-btn>
    <v-btn icon @click="getWeatherByLocation">
      <v-icon>mdi-crosshairs-gps</v-icon>
    </v-btn>
    <city-input-dialog
      v-if="cityInputDialogModel"
      v-model="cityInputDialogModel"
      @search-city="searchCity"
    />
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { WeatherData } from "@/network/weather";
import { mapGetters } from "vuex";
import { Coords } from "@/interfaces/Weather";

@Component({
  computed: {
    ...mapGetters({
      userCoords: "weather/userCoords",
    }),
  },
})
export default class Header extends Vue {
  weatherData = new WeatherData();
  userCoords!: Coords
  cityInputDialogModel = false

  languages = ["pl", "en"];

  changeLang(locale: string): void {
    this.$i18n.setLocale(locale);
  }

  async getWeatherByLocation(): Promise<void> {
    const weather = await this.weatherData.downloadData(this.userCoords);
    this.$store.commit("weather/insertWeatherData", weather);
  }

  async searchCity(city: string): Promise<void> {
    const weather = await this.weatherData.downloadData(undefined, city);
    this.$store.commit("weather/insertWeatherData", weather);

  }
}
</script>