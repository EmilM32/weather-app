<template>
  <v-row no-gutters>
    <v-col align="center" cols="12">
      <span class="display-2">{{ $t(dates.dayTranslation) }}</span>
    </v-col>
    <v-col align="center" cols="12">
      <span class="subtitle-2 date">
        {{ $t(dates.monthTranslation) }} {{ dates.dateOfMonth }} |
        {{ weather.name }}
      </span>
    </v-col>
    <v-col>
      <v-row align-content="end">
        <v-spacer />
        <TempBox
          :temperature="weather.main.temp_min.toFixed(1)"
          :small="true"
          title="MIN"
        />
        <TempBox :temperature="weather.main.temp.toFixed(1)" />
        <TempBox
          :temperature="weather.main.temp_max.toFixed(1)"
          :small="true"
          title="MAX"
        />
        <v-spacer />
      </v-row>
    </v-col>
    <v-col align="center" cols="12">
      <v-icon style="font-size: 15rem">mdi-weather-cloudy</v-icon>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Dates } from "@/logic/dates";
import { Weather } from "@/interfaces/Weather";

@Component
export default class WeatherView extends Vue {
  @Prop({ required: true }) weather!: Weather;
  dates = new Dates("days", "months");
}
</script>
<style lang="sass" scoped>
.date
  opacity: .7
</style>