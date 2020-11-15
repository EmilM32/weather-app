<template>
  <div>
    <span class="display-2 d-block">{{ $t(dates.dayTranslation) }}</span>
    <span class="subtitle-2 date">
      {{ $t(dates.monthTranslation) }} {{ dates.dateOfMonth }} |
      {{ city }}
    </span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";
import { Dates } from "@/logic/dates";

@Component
export default class LocationInfo extends Vue {
  @Prop({ required: true }) city!: string;
  dates = new Dates("days", "months");
}
</script>
<style lang="sass" scoped>
.date
  opacity: .7
</style>