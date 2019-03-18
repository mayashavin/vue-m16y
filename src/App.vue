<template>
  <v-app v-m16y-ctrls>
    <v-toolbar app>
      <v-toolbar-title class="headline">
        <span>M16Y - Media Accessibility Project</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <main-comp/>
    </v-content>
    <v-footer
      dark
      height="auto"
      class="d-flex"
    >
      <div class="white--text justify-center text-md-center">&copy; {{ new Date().getFullYear() }} - M16Y Project</div>
    </v-footer>
  </v-app>
</template>

<script>
import MainComp from './components/Main'

export default {
  name: 'App',
  components: {
    MainComp
  },
  data () {
    return {
      image: {
        publicId: 'VueJS_Amsterdam_2018/20-12-2D-pie',
        alt: 'Pie chart',
        crop: 'fill',
        gravity: 'center',
        width: 200,
        aspectRatio: '1:1',
      }
      //
    }
  }
}
</script>
