<template>
  <v-row no-gutters>
    <v-col align="center" cols="12">
      <LocationInfo :city="weather.name" />
    </v-col>
    <v-col>
      <v-row align-content="end">
        <v-spacer />
        <TempBox
          v-for="temp in tempBoxes"
          :key="temp.key"
          :temperature="`${weather.main[temp.key].toFixed(1)}`"
          :small="!!temp.title"
          :title="temp.title ? temp.title : ''"
        />
        <v-spacer />
      </v-row>
    </v-col>
    <v-col align="center" cols="12">
      <WeatherInfo
        :icon="weather.weather[0].icon"
        :description="weather.weather[0].description"
        :feels-like="weather.main.feels_like"
        :humidity="weather.main.humidity"
        :pressure="weather.main.pressure"
        :wind-speed="weather.wind.speed"
        :wind-deg="weather.wind.deg"
        :cloudiness="weather.clouds.all"
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Weather } from "@/interfaces/Weather";

interface SingleTempBox {
  key: string;
  title?: string;
}

@Component
export default class WeatherView extends Vue {
  @Prop({ required: true }) weather!: Weather;
  tempBoxes: Array<SingleTempBox> = [
    {
      key: "temp_min",
      title: "MIN",
    },
    {
      key: "temp",
    },
    {
      key: "temp_max",
      title: "MAX",
    },
  ];
}
</script>
<style lang="sass" scoped>
.date
  opacity: .7
</style>