<template>
  <div class="access-ctrls-wrapper">
    <button @click="toggleAccessibilityCtrlsSection" class="m-access-ctrls-btn">
      <div class="m-access-ctrls-btn__content">{{accessBtn}}</div>
      <i class="material-icons">
        accessibility
      </i>
    </button>
    <!-- <v-btn :color="accessBtnColor" round @click="toggleAccessibilityCtrlsSection" class="white--text">
      {{accessBtn}}
      <v-icon right medium>{{accessBtn}}</v-icon>
    </v-btn> -->
    <transition name="component-fade" mode="out-in">
      <div class="section-container pa1 d--grid" v-show="this.openAccessControlSection">
        <!-- TODO: turn it to slider -->
        <div class="slider-container">
          <label for="light-sensitivity-control">{{nightMode ? 'Darkness' : 'Brightness'}}</label>
          <input type="range" min="1" max="200" 
            @change="modifyBrightness"
            v-model="brightness" class="slider" id="light-sensitivity-control">
        </div>
        <div class="slider-container">
          <label for="contrast-sensitivity-control">Contrast</label>
          <input type="range" min="1" max="200" 
            @change="modifyContrast"
            v-model="contrast" class="slider" id="contrast-sensitivity-control">
        </div>
        <div class="switcher-container">
          <label for="nightMode-control">Dark Mode</label>
          <input type="checkbox"
            @change="switchScreenMode"
            v-model="nightMode" class="switcher" id="nightMode-control">
        </div>
        <div class="switcher-container">
          <label for="nightMode-control">Color Blind Mode</label>
          <input type="checkbox"
            @change="supportColorblind"
            v-model="colorBlind" class="switcher" id="nightMode-control">
        </div>
        <div class="switcher-container">
          <label for="nightMode-control">Grayscale Mode</label>
          <input type="checkbox"
            @change="supportGrayscale"
            v-model="grayscale" class="switcher" id="nightMode-control">
        </div>
        <button @click="reset" class="m-access-ctrls__reset-btn">Reset</button>
      </div>
    </transition>
  </div>  
</template>
<script>
export default {
  name: 'AccessibilityControls',
  props: {},
  data() {
    return {
      openAccessControlSection: false,
      colorBlind: this.$m16y.colorBlind,
      nightMode: this.$m16y.nightMode,
      grayscale: this.$m16y.grayscale,
      brightness: this.$m16y.brightness,
      contrast: this.$m16y.contrast,
    };
  },
  mounted() {},
  methods: {
    toggleAccessibilityCtrlsSection() {
      this.openAccessControlSection = !this.openAccessControlSection;
    },
    modifyBrightness() {
      this.$m16y.$emit('brightness', `${this.brightness}%`);
    },
    modifyContrast() {
      this.$m16y.$emit('contrast', `${this.contrast}%`);
    },
    supportColorblind() {
      this.$m16y.$emit('colorBlind', this.colorBlind);
    },
    switchScreenMode() {
      this.$m16y.$emit('nightMode', this.nightMode);
    },
    supportGrayscale() {
      this.$m16y.$emit('grayscale', this.grayscale);
    },
    reset() {
      this.brightness = 100;
      this.contrast = 100;
      this.colorBlind = false;
      this.nightMode = false;
      this.grayscale = false;
      this.modifyBrightness();
      this.modifyContrast();
      this.supportColorblind();
      this.switchScreenMode();
      this.supportGrayscale();
    },
  },
  computed: {
    accessBtn() {
      return this.openAccessControlSection ? 'close' : 'accessibility';
    },
    accessBtnColor() {
      return this.openAccessControlSection ? 'grey darken-1' : 'primary';
    },
  },
};
</script>
<style lang="scss">
  :root{
    --brightness: 100%;
    --contrast: 100%;
    --grayscale: 0;
    --invert: 0;
    --fontSize: 100%;
  }

  .m16y-control--enabled {
    filter: contrast(var(--contrast)) brightness(var(--brightness)) #{"grayscale(var(--grayscale))"} #{"invert(var(--invert))"};

    // Double invert for night mode to maintain image color
    // img {
    //   filter: #{"invert(var(--invert))"};
    // }
  }
</style>
<style scoped lang="scss">
  .access-ctrls-wrapper{
    display: grid;
    justify-items: end;
    position: absolute;
    right: 0;
    z-index: 2;
    top: 0;
    // background: white; //should only relevant when it's opened.

    .m-access-ctrls-btn {
      background: #00897B;
      color: white;
      display:flex;
      padding: 5px 15px;
      align-items: center;
      border-radius: 30px;
      justify-content: center;
      text-transform: uppercase;
      border: 1px solid transparent;
      min-height: 36px;
      flex: 0 0 auto;
      font-size: 14px;
      font-weight: 500;
      margin: 6px 8px;
      min-width: 88px;
      outline: 0;
      text-decoration: none;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
      position: relative;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      .m-access-ctrls-btn__content {
        margin-right: 5px;
        line-height: 24px;
      }
    }

    .m-access-ctrls__reset-btn {
      background: #00897B;
      color: white;
      display:flex;
      padding: 3px 5px;
      align-items: center;
      border-radius: 3px;
      justify-content: center;
      text-transform: uppercase;
      border: 1px solid transparent;
      flex: 0 0 auto;
      font-size: 14px;
      font-weight: 500;
      margin: auto;
      outline: 0;
      text-decoration: none;
      transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
      position: relative;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }

  .section-container {
    border: 1px solid #E0E0E0;
    margin-right: 8px;
    width: 300px;
    box-shadow: 2px 2px 5px -2px #E0E0E0;
    background: white;
    padding: 8px;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
