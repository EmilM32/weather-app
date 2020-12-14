<template>
  <v-dialog v-model="cityInputDialogModel" max-width="500px" persistent>
    <v-card>
      <v-card-title>{{ $t('form.city') }}</v-card-title>
      <v-card-text>
        <v-form ref="cityForm">
        <v-text-field
          v-model="city"
          outlined
          @keyup.enter="searchCity"
          @keyup.esc="$emit('input', false)"
          autofocus
          required
          :rules="[(val) => !!val || $t('form.required')]"
        />
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn icon @click="$emit('input', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn icon color="success" @click="searchCity">
          <v-icon>mdi-check</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Ref } from "nuxt-property-decorator";
import { VForm } from "@/types"

@Component
export default class CityInputDialog extends Vue {
  @Model('input') cityInputDialogModel!: boolean
  @Ref("cityForm") readonly cityForm!: VForm;
  city = ''

  searchCity() {
    if (this.cityForm.validate()) {
      this.$emit('search-city', this.city)
      this.$emit('input', false)
    }
  }
}
</script>