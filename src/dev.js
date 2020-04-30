import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Dev from './dev.vue'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  render: h => h(Dev),
}).$mount('#app')
