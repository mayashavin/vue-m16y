import 'material-design-icons';
import AccessibilityControls from './components/AccessibilityControls.vue';
import ImageWrapper from './components/ImageWrapper.vue';
import Cloudinary from 'cloudinary-vue';
/* eslint-disable*/

const defaults = {
  data: {
    colorBlind: false,
    nightMode: false,
    grayscale: false,
    brightness: 100,
    contrast: 100,
    changeBrightness(percent) {
      document.body.style.setProperty('--brightness', percent);
    },
    changeContrast(percent) {
      document.body.style.setProperty('--contrast', percent);
    },
    toogleGrayscaleMode(isGrayscaleOn) {
      document.body.style.setProperty('--grayscale', isGrayscaleOn ? 1 : 0);
    },
    switchNightMode(isDarkMode) {
      this.nightMode = isDarkMode;
      document.body.style.setProperty('--invert', isDarkMode ? 1 : 0);
    },
    supportColorBlind(isColorBlind) {
      this.colorBlind = isColorBlind;
    },
  },
}

const registerComponents = (components) => {
  if (components) {
    for (var key in components) {
      const component = components[key];

      // TODO - check if the component is registered
      if (component) {
        Vue.component(key, component);
        return true;
      }
    }
  }

  return false;
}

/**
 * Steps to do:
 * 1. Check if there is more than one Vue instance installed
 * 2. Remove vuetify!!!!
 * 3. Options - what accessibility controls should be included - ✅(partial)
 * 4. Element to attached
 * 5. Separate CSS
 * 6. UI?
 * 7. Can we make imageWrapper to directive instead of component also?
 */
const M16yPlugin = {
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) return;

    this.installed = true;
    let data = {};

    if (options.configurations) {

      // TODO - customize the configuration panel of widget
      for (var key in options.configurations) {
        const configuration = options.configurations[key];

        if (configuration) {
          data = {
            ...data,
            [key]: defaults.data[key],
          };
        }

      }
    }
    else {
      data = defaults.data;
    }

    const root = new Vue({
      data: data,
      render: createElement => createElement(AccessibilityControls),
    });

    root.$on('brightness', data.changeBrightness);
    root.$on('contrast', data.changeContrast);
    root.$on('grayscale', data.toogleGrayscaleMode);
    root.$on('nightMode', data.switchNightMode);
    root.$on('colorBlind', data.supportColorBlind);

    if (options.plugins.Cloudinary) {
      Vue.use(Cloudinary, {
        ...options.plugins.Cloudinary,
      });
    }

    // Only register external components
    const registeredComps = registerComponents(options.components);

    if (!registeredComps) {
      Vue.component('imageWrapper', ImageWrapper);
    }

    const directiveName = options.directiveName || "m16yCtrls";

    Vue.directive(directiveName, {
      bind(el) {
        el.classList.add(`m16y-control--enabled`);
        root.$mount(el.appendChild(document.createElement('div')));
      }
    });

    Vue.prototype.$m16y = root;
  },
  version: '0.0.6',
};

let GlobalVue = null;

if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}
if (GlobalVue) {
	GlobalVue.use(M16yPlugin);
}

export default M16yPlugin;
