<template>
  <div>
    <v-card>
      <v-card-text>{{ getDay }}</v-card-text>
      <v-btn @click="clickMe('pl')">pl</v-btn>
      <v-btn @click="clickMe('en')">en</v-btn>
    </v-card>
    <!-- test -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { TranslateResult } from "vue-i18n";

enum DayOfTheWeek {
  SUN,
  MON,
  TUES,
  WED,
  THURS,
  FRI,
  SAT,
}

@Component
export default class Main extends Vue {
  
  get getDay(): TranslateResult {
    const day = new Date().getDay();

    return this.$t(`days.${DayOfTheWeek[day]}`);
  }

  clickMe(locale: string): void {
    this.$i18n.setLocale(locale);
  }
}
</script>