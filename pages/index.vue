<template>
  <div class="container">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class Main extends Vue {
  msg = 'lalala'
}
</script>