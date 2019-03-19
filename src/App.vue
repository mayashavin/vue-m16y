<template>
  <v-app id="app" v-m16y-ctrls>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>M16Y Project</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content><router-view/></v-content>
    <v-footer
      dark
      height="auto"
      class="d-flex"
    >
      <div class="white--text justify-center text-md-center">&copy; {{ new Date().getFullYear() }} - M16Y Project</div>
    </v-footer>
  </v-app>
</template>