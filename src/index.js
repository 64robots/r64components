import './assets/app.css'
import R64Button from './components/R64Button'
import defaultTheme from './themes/default.js'

const components = {
  R64Button
}

const extendComponent = (Vue, theme, component) => {
  const currentTheme = defaultTheme[component]
  const newTheme = { ...currentTheme, ...theme }

  const { props } = components[component]
  Object.keys(newTheme).forEach(key => {
    const prop = { default: () => newTheme[key] }
    props[key] = prop
  })

  return Vue.extend({ ...components[component], ...props })
}

const install = (Vue, args = {}) => {
  const currentTheme = { ...defaultTheme, ...args }
  Object.keys(components).forEach(component => {
    Vue.component(component, extendComponent(Vue, currentTheme[component], component))
  })
}

export { R64Button }
export default { install }
