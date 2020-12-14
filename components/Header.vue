<template>
  <v-row no-gutters>
    <v-btn v-for="lang in languages" :key="lang" icon @click="changeLang(lang)">
      <img :src="`/flags/${lang}.svg`" width="20" :alt="lang" />
    </v-btn>
    <v-spacer />
      <v-row no-gutters v-show="cityInput">
        <v-text-field
          v-model="city"
          dense
          class="shrink"
          @keyup.enter="searchCity"
          autofocus
        />
        <v-btn icon @click="searchCity">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    <v-btn icon @click="cityInput = !cityInput">
      <v-icon>mdi-city</v-icon>
    </v-btn>
    <v-btn icon @click="getWeatherByLocation">
      <v-icon>mdi-crosshairs-gps</v-icon>
    </v-btn>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";
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

  cityInput = false
  city = ''
  languages = ["pl", "en"];


  changeLang(locale: string): void {
    this.$i18n.setLocale(locale);
  }

  async getWeatherByLocation(): Promise<void> {
    const weather = await this.weatherData.downloadData(this.userCoords);
    this.$store.commit("weather/insertWeatherData", weather);
  }

  async searchCity(): Promise<void> {
    const weather = await this.weatherData.downloadData(undefined, this.city);
    this.$store.commit("weather/insertWeatherData", weather);
    this.cityInput = false
  }

  @Watch('cityInput')
  onCityInputChanged(newVal: boolean) {
    if (!newVal) this.city = ''
  }
}
</script>