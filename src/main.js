import Vue from 'vue'
import App from './App'
import {store} from '../store'
import VueTheMask from 'vue-the-mask'

Vue.use(VueTheMask)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  components: {App},
  template: '<App/>'
})
