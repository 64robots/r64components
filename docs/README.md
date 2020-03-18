# Getting Started

R64Components is a collection of components that we reuse across different projects. We are also adding new components and utilities as we find the need.
The idea here is making them more configurable and reusable in package development. That's why we provide different props for components in order
to be fully customized per project.

Looking forward to see your feedback.

### Available components:

- [x] R64Button
- [x] R64Checkbox
- [x] R64Input
- [x] R64Radio
- [x] R64Select

## Install

Install the package
```console
yarn add r64components
```

or if you use npm
```console
npm install --save r64components
```

## Usage:

### Vue.js

```javascript
// main.js
import R64Components from 'r64components'

Vue.use(R64Components);
```

### Nuxt.js
Create a file `r64components.js` in the plugins directory.

```javascript
// plugins/r64components.js
import Vue from 'vue'
import R64Components from 'r64components'

Vue.use(R64Components)
```

Register the plugin in the `nuxt.config.js`

```javascript
plugins: [
  '~/plugins/r64components'
],
```

### Customization

If you want to overwrite the components look and feel you just need to set your custom classes. Change only the one you need, the other classes will take the default values.

Each component can be customized under their component name as a key.

```javascript
// main.js
import R64Components from 'r64components'

const customTheme = {
  R64Button: {
    // Note that this will override the entire baseClass.
    // So if you want to keep some default values you'll need to paste them here
    baseClass: "block rounded-lg inline-flex items-center justify-center transition duration-150 ease-in-out",
    primaryClass: "bg-purple-600 text-white hover:bg-purple-700",
  }
}

Vue.use(R64Components, customTheme)
```


For better reusability and organization we encourage to have your custom theme in a file and import it :ok_hand: