<template>
  <v-app v-m16y-ctrls>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>M16Y</span>
        <span class="font-weight-light">Media Accessibility Project</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <image-wrapper :img="image"/>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
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
