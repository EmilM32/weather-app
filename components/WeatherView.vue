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
      <v-icon style="font-size: 15rem">mdi-weather-cloudy</v-icon>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Dates } from "@/logic/dates";
import { Weather } from "@/interfaces/Weather";

interface SingleTempBox {
  key: string;
  title?: string;
}

@Component
export default class WeatherView extends Vue {
  @Prop({ required: true }) weather!: Weather;
  dates = new Dates("days", "months");
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