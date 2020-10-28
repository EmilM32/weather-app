<template>
  <div>
    <v-card>
      <v-card-text>{{ $t(dates.dayTranslation) }} {{ $t(dates.monthTranslation) }} {{ dates.dateOfMonth }}</v-card-text>
      <v-btn @click="clickMe('pl')">pl</v-btn>
      <v-btn @click="clickMe('en')">en</v-btn>
    </v-card>
    <!-- test -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Dates } from "@/logic/dates"


@Component
export default class Main extends Vue {
  dates= new Dates('days', 'months')

  clickMe(locale: string): void {
    this.$i18n.setLocale(locale);
  }
}
</script>