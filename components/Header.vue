<template>
  <div>
    <v-btn v-for="lang in languages" :key="lang" icon @click="changeLang(lang)">
      <img :src="`/flags/${lang}.svg`" width="20" :alt="lang" />
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component
export default class Header extends Vue {
  languages = ["pl", "en"];
  changeLang(locale: string): void {
    this.$i18n.setLocale(locale);
  }
}
</script>