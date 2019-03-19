<template>
  <v-container text-xs-center>
    <v-flex xs12>
      <image-wrapper :img="mainImage"/>
    </v-flex>

    <v-flex mb-4>
      <h1 class="font-weight-bold mb-5">
        M16y accessibility plugin for Vue app
      </h1>
      <h2 class="title ma-3">✅ vue Easy to integrate</h2>
      <h2 class="title ma-3">❤️ Maximize user accesibility</h2>
      <h2 class="title ma-3">👩‍💻 Support visual impaired mode</h2>
    </v-flex>
    <v-flex mb-4 align-center>
      <v-btn color="teal darken-3" class="white--text" align-center>
        How to install
        <v-icon right small>build</v-icon>
      </v-btn>
      <v-btn color="teal darken-3" outline align-center>
        Documentation
        <v-icon right>library_books</v-icon>
      </v-btn>
      <a rel="noreferrer" class="v-btn v-btn--outline v-btn--depressed theme--light teal--text text--darken-3" href="https://github.com/mayashavin/vue-m16y" target="_blank">
        Github
        <font-awesome-icon :icon='gitHub' class="ml-2" style="font-size: 20px"/>
      </a>
    </v-flex>      
  </v-container>
</template>

<script>
// @ is an alias to /src
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
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
