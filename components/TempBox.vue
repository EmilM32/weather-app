<template>
  <div :class="{
    'small-box-large': small && !isMobile,
    'small-box-mobile': small && isMobile,
    'temp-box-large': !isMobile,
    'temp-box-mobile': isMobile,
  }">
    <v-row v-if="small" justify="center">
      <span :class="{
        'temp-title-large': !isMobile,
        'temp-title-mobile': isMobile
      }">{{ title }}</span>
    </v-row>
    <v-row no-gutters justify="space-between" align="center">
      <span class="temp-value">
        {{ temperature }}
      </span>
      <v-icon :style="{ fontSize: `${
        !isMobile ?
          small ? 3 : 4
          : small ? 1 : 2
      }rem` }"
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

  get isMobile(): boolean {
    return this.$vuetify.breakpoint.mobile
  }
}
</script>
<style lang="sass" scoped>
.temp-box-large
  display: inline
  margin: 1rem
  font-size: 3.5rem

.small-box-large
  font-size: 2.5rem
  opacity: .7

.temp-box-mobile
  display: inline
  margin: .5rem
  font-size: 2.5rem

.small-box-mobile
  font-size: 1.5rem
  opacity: .7

.temp-title-large
  font-size: 1rem

.temp-title-mobile
  font-size: .8rem

.temp-value
  font-weight: bold
</style>