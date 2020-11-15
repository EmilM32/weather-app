<template>
  <div>
    <img :src="weatherIconURL" alt="weather-icon" />
    <SpanBlock :size="1.5">
      {{ description[$i18n.locale] }}
    </SpanBlock>
    <v-row class="my-5">
      <v-col v-for="data in weatherInfo" :key="data.title">
        <WeatherInfoSingle
          :title="data.title"
          :value="data.value"
          :unit="data.unit"
          :icon="data.icon"
          :wind-direction="data.windDirection"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { WindDirections } from "@/logic/windDirections";
import { SingleWeatherInfo } from "./WeatherInfoSingle.vue";

@Component
export default class WeatherInfo extends Vue {
  @Prop({ required: true }) icon!: string;
  @Prop({ required: true }) description!: string;
  @Prop({ required: true }) feelsLike!: number;
  @Prop({ required: true }) humidity!: number;
  @Prop({ required: true }) pressure!: number;
  @Prop({ required: true }) windSpeed!: number;
  @Prop({ required: true }) windDeg!: number;
  @Prop({ required: true }) cloudiness!: number;

  windDirection: string = new WindDirections(this.windDeg).direction;

  weatherInfo: Array<SingleWeatherInfo> = [
    {
      title: this.$t("weatherInfo.feelsLike"),
      value: this.feelsLike,
      icon: "mdi-temperature-celsius",
    },
    {
      title: this.$t("weatherInfo.humidity"),
      value: this.humidity,
      unit: "%",
    },
    {
      title: this.$t("weatherInfo.pressure"),
      value: this.pressure,
      unit: "hpa",
    },
    {
      title: this.$t("weatherInfo.wind"),
      value: this.windSpeed,
      unit: "m/s",
      windDirection: this.windDirection,
    },
    {
      title: this.$t("weatherInfo.cloudiness"),
      value: this.cloudiness,
      unit: "%",
    },
  ];

  get weatherIconURL(): string {
    return `http://openweathermap.org/img/wn/${this.icon}@4x.png`;
  }
}
</script>