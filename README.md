# vue-accessibility-widget
Vue plugin for m16y - media accessibility for visually impaired user support.

Demo: [https://vue-accessibility-demo.netlify.com/](https://vue-accessibility-demo.netlify.com/)

It will inject a small widget with basic settings to for helping visually impaired user, including:
1. Low visions (contrast sensitivy, brightness sensitivity, etc)
2. Color blindness (texture support)

**_Coming soon_**
- Auto modify all image tags when plugin is enabled.
- Warm lighting mode


## Functionalities
![screenshot of plugin UI](https://res.cloudinary.com/mayashavin/image/upload/w_250/v1550135241/Screen_Shot_2019-02-14_at_10.05.40.png)

### Brightness control
Allow user to change the brightness of the whole app.

Default: `100%`

# Contrast control
Allow user to change the contrsat of the whole app.

Default: `100%`

### Dark mode (Night mode)
Allow user to switch the app to dark theme, which is easier to read.

Default: `false`

### Color blind mode
* Allow user to enable color blind mode for images throughout the app. It will add texture to differentiate similar colors (red-green).

* Currently only works when image is rendered using `image-wrapper` component.

Default: `false`

### Grayscale mode
Allow user to switch the app to grayscale color theme.

## How to use

### Install the plugin
- Add the plugin to Vue using

### Getting started 👩‍💻
- Add the plugin to Vue using

```
import M16yPlugin from 'vue-accessibility-widget';

Vue.use(M16yPlugin);
```

- Use Cloudinary plugins to get all other cool accessibility effect:
```
import M16yPlugin from 'vue-accessibility-widget';

Vue.use(M16yPlugin, {
  plugins: { 
    Cloudinary: {
      cloudName: <yourCloudName>  //if you want to use Cloudinary
    }
  }
});
```

- In `App.vue` simple add attribute `v-m16y-ctrls`
```
<div id="app" v-m16y-ctrls>
<!--code here--/>
</div>
```

**Or you can customize the attribute name by**
```
Vue.use(M16yPlugin, {
  directiveName: 'v-access-ctrls',
});
```

And in `App.vue`
```
<div id="app" v-access-ctrls>
<!--code here--/>
</div>
```

And it will just work! 👍

### Use `image-wrapper`

`image-wrapper` receives the following basic props:

`publicId: string` - the image unique Id using Cloudinary

`width: number` - width of the image

`height: number` - height of the image

`alt: string`- alt text of the image

`optimizedWhiteText: boolean` - whether should optimize the image brightness for using as background of white text.

`optimizedBlackText: boolean` - whether should optimize the image brightness for using as background of black text.

Other transformation effects which follow [Cloudinary standards](https://cloudinary.com/documentation/image_transformations)

## Technologies used
[Vue](https://vuejs.com)

Image manipulation support for color blind and night mode using [Cloudinary Vue SDK - Beta](https://cloudinary.com)

![Image manipulation](https://cloudinary-res.cloudinary.com/image/upload/w_250/v1538583988/cloudinary_logo_for_white_bg.png)

And of course a bunch of other automation tools and JavaScript, CSS 👩‍💻

## Version
0.0.33

## Docs & Roadmap ✍️
Coming soon

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/)
