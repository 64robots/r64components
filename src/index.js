import components from './components/index'
import defaultTheme from './themes/default.js'

const extendComponent = (Vue, theme, component) => {
  const currentTheme = defaultTheme[component]
  const newTheme = { ...currentTheme, ...theme }

  const { props } = components[component]
  Object.keys(newTheme).forEach(key => {
    const prop = { default: () => newTheme[key] }
    props[key] = prop
  })

  return Vue.extend({ ...components[component], ...{ props } })
}

const install = function(Vue, options = {}) {
  if (install.installed) return
  install.installed = true

  const currentTheme = { ...defaultTheme, ...options }
  Object.keys(components).forEach(component => {
    Vue.component(
      component,
      extendComponent(Vue, currentTheme[component], component)
    )
  })
}

const plugin = { install }

export default plugin

export * from '@/components/index'
