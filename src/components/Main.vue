<template>
  <v-container>
    <v-layout
      text-xs-center
      wrap
    >
      <v-flex xs12>
        <image-wrapper :img="mainImage"/>
      </v-flex>

      <v-flex mb-4>
        <h2 class="display-2 font-weight-bold mb-5">
          M16y accessibility plugin for Vue app
        </h2>
        <h3 class="title ma-3">✅ Easy to integrate</h3>
        <h3 class="title ma-3">❤️ Maximize user accesibility</h3>
        <h3 class="title ma-3">👩‍💻 Support visual impaired mode</h3>
      </v-flex>
      <v-flex mb-4 align-center>
        <v-btn color="teal darken-3" class="white--text" align-center>
          How to install
          <v-icon right small>build</v-icon>
        </v-btn>
        <a class="v-btn v-btn--outline v-btn--depressed theme--light teal--text text--darken-3" href="https://github.com/mayashavin/vue-m16y" target="_blank">
          Github
          <font-awesome-icon :icon='gitHub' class="ml-2" style="font-size: 20px"/>
        </a>
      </v-flex>      
    </v-layout>
  </v-container>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

  export default {
    data: () => ({
      mainImage: {
        publicId: 'VueJS/logo',
        alt: 'Vuetify icon',
        crop: 'fill',
        gravity: 'center',
        width: 200,
        aspectRatio: '1:1',
      },
      gitHub: faGithub,
    }),
    components: {
      FontAwesomeIcon
    }
  }
</script>

<style>

</style>
