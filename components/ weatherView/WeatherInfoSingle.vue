<template>
  <div>
    <SpanBlock>
      {{ title }}
    </SpanBlock>
    <SpanBlock>
      <span>
        {{ value }}
      </span>
      <span v-if="unit">
        {{ unit }}
      </span>
      <v-icon v-else-if="icon" style="font-size: 1.2rem !important">{{
        icon
      }}</v-icon>
      <span v-if="windDirection">
        {{ windDirection }}
      </span>
    </SpanBlock>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { TranslateResult } from "vue-i18n";

export interface SingleWeatherInfo {
  title: TranslateResult;
  value: number;
  icon?: string;
  unit?: string;
  windDirection?: string;
}
@Component
export default class WeatherInfoSingle
  extends Vue
  implements SingleWeatherInfo {
  @Prop({ required: true }) title!: TranslateResult;
  @Prop({ required: true }) value!: number;
  @Prop() unit?: string;
  @Prop() windDirection?: string;
  @Prop() icon?: string;
}
</script>