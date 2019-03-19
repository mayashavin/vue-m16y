import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import M16y from 'vue-accessibility-widget';
import router from './router'

Vue.use(M16y, {
  plugins: {
    Cloudinary: {
      configuration: {
        cloudName: 'mayashavin',
      }
    }
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
