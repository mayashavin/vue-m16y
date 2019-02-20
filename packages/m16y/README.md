# vue-accessibility-widget
[![contributors welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

Vue plugin for a11y which enables media accessibility (m16y) customized controls widget for visually impaired user support in your app.

Automatically.

![screenshot of plugin UI](https://res.cloudinary.com/mayashavin/image/upload/v1550696448/screenshot_m16y_widget.png)

It will inject a small widget with basic settings to for helping visually impaired user, including:
1. Low visions (contrast sensitivy, brightness sensitivity, etc)
2. Color blindness (texture support)

## Features

### Brightness control
Allow user to change the brightness of the whole app.

Default: `100%`

### Contrast control
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

## Installing 🚀
Direct install from npm `vue-accessibility-widget`

```
$ npm install --save vue-accessibility-widget
```

Or `yarn`

```
$ yarn add vue-accessibility-widget
```

### Getting started 👩‍💻
- Add the plugin to Vue using

```
import M16yPlugin from 'm16y-plugin';

Vue.use(M16yPlugin);
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

### Docs ✍️
Coming soon

### Issues 😱
Any bug 🐛 or issue ❓, just drop me a line at [Issues](https://github.com/mayashavin/vue-accessibility-demo/issues)

### License
MIT