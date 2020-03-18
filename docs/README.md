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
