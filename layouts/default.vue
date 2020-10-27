<template>
  <v-app id="app">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-spacer />
        <v-col cols="8">
          <Nuxt />
        </v-col>
        <v-spacer />
      </v-row>
    </v-container>
  </v-app>
</template>
<style>
body {
  background-color: #7cadb2 !important;
}
#app {
  background-color: var(--v-background-base);
}
</style>