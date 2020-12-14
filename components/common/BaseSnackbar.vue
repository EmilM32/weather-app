<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="showSnackbar"
      :color="snackbar.type"
      top
    >
      {{ $t(snackbar.text) }}

      <template v-slot:action="{ attrs }">
        <v-btn
          icon
          v-bind="attrs"
          @click="showSnackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";
import { mapGetters } from "vuex";
import { Snackbar } from "@/interfaces";

@Component({
  computed: {
    ...mapGetters({
      snackbar: "weather/snackbar",
    }),
  },
})
export default class BaseSnackbar extends Vue {
  snackbar!: Snackbar
  showSnackbar = false

  @Watch('snackbar', { immediate: true, deep: true })
  onSnackbarChanged(newVal: Snackbar, oldVal?: Snackbar) {
    if (oldVal) {
      this.showSnackbar = true
    }
  }
}
</script>
