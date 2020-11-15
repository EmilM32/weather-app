<template>
  <v-row justify="center">
    <v-col cols="2" align="end">
      {{ sunrise.hour }}:{{ sunrise.minute }}
      <v-icon x-large>mdi-weather-sunset-up</v-icon>
    </v-col>
    <v-col cols="8">
      <v-slider
        v-model="sliderModel"
        :max="sliderValue(this.sunsetUnix)"
        :min="sliderValue(this.sunriseUnix)"
        track-color="amber lighten-1"
        color="blue-grey darken-1"
        readonly
      />
    </v-col>
    <v-col cols="2">
      <v-icon x-large>mdi-weather-sunset-down</v-icon> {{ sunset.hour }} :
      {{ sunset.minute }}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

interface SunData {
  hour: number;
  minute: number;
}

interface SunInfoTemplate {
  sunsetUnix: number;
  sunriseUnix: number;
  sunset: SunData;
  sunrise: SunData;
  getHoursMinutes(unixTime: number): SunData;
  sliderValue(unitTime: number): number;
}

@Component
export default class SunInfo extends Vue implements SunInfoTemplate {
  @Prop({ required: true }) sunsetUnix!: number;
  @Prop({ required: true }) sunriseUnix!: number;

  sliderModel = new Date().getTime();

  get sunset(): SunData {
    return this.getHoursMinutes(this.sunsetUnix);
  }

  get sunrise(): SunData {
    return this.getHoursMinutes(this.sunriseUnix);
  }

  getHoursMinutes(unixTime: number): SunData {
    const date = new Date(unixTime * 1000);
    return {
      hour: date.getHours(),
      minute: date.getMinutes(),
    };
  }

  sliderValue(unitTime: number): number {
    return new Date(unitTime * 1000).getTime();
  }
}
</script>