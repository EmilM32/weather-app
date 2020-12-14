<template>
  <div class="temp-box" :class="{ 'small-box': small }">
    <v-row v-if="small" justify="center">
      <span class="temp-title">{{ title }}</span>
    </v-row>
    <v-row no-gutters justify="space-between" align="center">
      <span class="temp-value">
        {{ temperature }}
      </span>
      <v-icon :style="{ fontSize: `${small ? 3 : 4}rem` }"
        >mdi-temperature-celsius</v-icon
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class TempBox extends Vue {
  @Prop() readonly temperature!: number;
  @Prop({ default: false }) readonly small!: boolean;
  @Prop({ default: "" }) readonly title!: string;
}
</script>
<style lang="sass" scoped>
.temp-box
  display: inline
  margin: 1rem
  font-size: 3.5rem

.small-box
  font-size: 2.5rem
  opacity: .7

.temp-title
  font-size: 1rem

.temp-value
  font-weight: bold
</style>