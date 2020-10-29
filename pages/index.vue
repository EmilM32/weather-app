<template>
  <div class="d-flex justify-center">
    <v-row no-gutters>
      <v-col align="center" cols="12">
        <span class="display-2 day">{{ $t(dates.dayTranslation) }}</span>
      </v-col>
      <v-col align="center" cols="12">
        <span class="subtitle-2 date">
          {{ $t(dates.monthTranslation) }} {{ dates.dateOfMonth }}
        </span>
      </v-col>
      <v-col>
        <v-row align-content="end">
          <v-spacer />
          <TempBox
            :temperature="5"
            :small="true"
            title="MIN"
          />
          <TempBox :temperature="15" />
          <TempBox
            :temperature="5"
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
    <!-- <v-btn @click="clickMe('pl')">pl</v-btn>
      <v-btn @click="clickMe('en')">en</v-btn> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { Dates } from "@/logic/dates";
import TempBox from "@/components/TempBox.vue";

@Component
export default class Main extends Vue {
  dates = new Dates("days", "months");

  clickMe(locale: string): void {
    this.$i18n.setLocale(locale);
  }
}
</script>
<style lang="sass" scoped>
.day
  font-family: "Montserrat"!important

.date
  opacity: .7
</style>