import Vue from 'vue'
import './plugins/vuetify';
import App from './App.vue';
import M16y from 'vue-accessibility-widget';

Vue.use(M16y, {
  plugins: {
    Cloudinary: {
      configuration: {
        cloudName: 'cloudinary',
      }
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
