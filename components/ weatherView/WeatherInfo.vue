<template>
  <div>
    <img :src="weatherIconURL" alt="weather-icon" />
    <SpanBlock :size="1.5">
      {{ description[$i18n.locale] }}
    </SpanBlock>
    <v-row>
      <v-col>
        <SpanBlock>
          {{ $t("weatherInfo.feelsLike") }}
        </SpanBlock>
        <SpanBlock>
          {{ feelsLike.toFixed(1) }}
          <v-icon style="font-size: 1rem !important"
            >mdi-temperature-celsius</v-icon
          >
        </SpanBlock>
      </v-col>
      <v-col>
        <SpanBlock>
          {{ $t("weatherInfo.humidity") }}
        </SpanBlock>
        <SpanBlock> {{ humidity }}% </SpanBlock>
      </v-col>
      <v-col>
        <SpanBlock>
          {{ $t("weatherInfo.pressure") }}
        </SpanBlock>
        <SpanBlock> {{ pressure }}hpa </SpanBlock>
      </v-col>
      <v-col>
        <SpanBlock>
          {{ $t("weatherInfo.wind") }}
        </SpanBlock>
        <SpanBlock> {{ windSpeed }}m/s {{ windDirection.direction }}</SpanBlock>
      </v-col>
      <v-col>
        <SpanBlock>
          {{ $t("weatherInfo.cloudiness") }}
        </SpanBlock>
        <SpanBlock> {{ cloudiness }}% </SpanBlock>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { WindDirections } from "@/logic/windDirections";
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

  windDirection: WindDirections = new WindDirections(this.windDeg);

  get weatherIconURL(): string {
    return `http://openweathermap.org/img/wn/${this.icon}@4x.png`;
  }
}
</script>