<template>
  <v-app id="app">
    <Header />
    <v-container fluid fill-height>
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
  background-image: linear-gradient(to bottom right, #527b92, #83bbba);
}
#app {
  background-color: var(--v-background-base);
}
</style>