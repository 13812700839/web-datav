import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(element)
Vue.use(vueRouter)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
