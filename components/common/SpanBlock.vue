<template>
  <span class="overline d-block" :style="`font-size: ${size}rem !important`">
    <slot />
  </span>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component
export default class SpanBlock extends Vue {
  @Prop({ default: 1 }) size?: number;
}
</script>