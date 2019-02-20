<template>
  <div class="access-ctrls-wrapper">
    <v-btn :color="accessBtnColor" round @click="toggleAccessibilityCtrlsSection" class="white--text">
      {{accessBtn}}
      <v-icon right medium>{{accessBtn}}</v-icon>
    </v-btn>
    <transition name="component-fade" mode="out-in">
      <div class="section-container pa1 d--grid" v-show="this.openAccessControlSection">
        <v-slider
          :label="nightMode ? 'Darkness' : 'Brightness'"
          v-model="brightness"
          max="200"
          @change="modifyBrightness"
        />
        <v-slider
          label="Contrast  "
          @change="modifyContrast"
          v-model="contrast"
          max="200"
        />
        <v-switch
          label="Dark Mode"
          @change="switchScreenMode"
          color="primary"
          v-model="nightMode"
        />
        <v-switch
          label="Color Blind Mode"
          @change="supportColorblind"
          color="primary"
          v-model="colorBlind"
        />
        <v-switch
          label="Grayscale Mode"
          @change="supportGrayscale"
          color="primary"
          v-model="grayscale"
        />
        <v-btn @click="reset" dark color="teal darken-1" class="justify-self-center">
          Reset
          <v-icon right medium>format_color_reset</v-icon>
        </v-btn>
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
    background: white;
  }

  .section-container {
    border: 1px solid #E0E0E0;
    margin-right: 1rem;
    width: 300px;
    box-shadow: 2px 2px 5px -2px #E0E0E0;
  }

  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
  /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
