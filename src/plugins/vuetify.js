import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import { VApp, VSlider, VSwitch, VIcon, VBtn, VRadio, VRadioGroup } from 'vuetify/lib/components';
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  components: {
    VApp,
    VSlider,
    VSwitch,
    VIcon,
    VBtn,
    VRadio,
    VRadioGroup,
  },
})
