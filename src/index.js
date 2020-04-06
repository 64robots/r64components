import R64Button from './components/R64Button'
import R64Checkbox from './components/R64Checkbox'
import R64Input from './components/R64Input'
import R64Textarea from './components/R64Textarea'
import R64Radio from './components/R64Radio'
import R64Select from './components/R64Select'
import defaultTheme from './themes/default.js'

const components = {
  R64Button,
  R64Checkbox,
  R64Input,
  R64Radio,
  R64Select,
  R64Textarea,
}

const extendComponent = (Vue, theme, component) => {
  const currentTheme = defaultTheme[component]
  const newTheme = { ...currentTheme, ...theme }

  const { props } = components[component]
  Object.keys(newTheme).forEach((key) => {
    const prop = { default: () => newTheme[key] }
    props[key] = prop
  })

  return Vue.extend({ ...components[component], ...{ props } })
}

export default {
  install(Vue, args = {}) {
    if (this.installed) return
    this.installed = true

    const currentTheme = { ...defaultTheme, ...args }
    Object.keys(components).forEach((component) => {
      Vue.component(component, extendComponent(Vue, currentTheme[component], component))
    })
  },
}
