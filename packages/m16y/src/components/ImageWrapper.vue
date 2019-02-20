<template>
    <CLDImage v-bind="tranformedImg"/>
</template>
<script>
export default {
  name: 'ImageWrapper',
  props: {
    img: {
      type: Object,
      required: true,
    },
    optimizedWhiteText: {
      type: Boolean,
      default: false,
    },
    optimizedBlackText: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    tranformedImg() {
      const transformed = {
        ...this.img,
        transformation: this.img.transformation ? [...this.img.transformation] : [],
      };

      if (this.optimizedWhiteText) {
        transformed.transformation.push({
          effect: 'brightness_hsb:-50',
        });
      }

      if (this.optimizedBlackText) {
        transformed.transformation.push({
          effect: 'brightness_hsb:30',
        });
      }

      if (this.$m16y.colorBlind) {
        transformed.transformation.push({
          effect: 'assist_colorblind',
        });
      }

      if (this.$m16y.nightMode) {
        transformed.transformation.push({
          effect: 'negate',
        });
      }
      return transformed;
    },
  },
};
</script>
