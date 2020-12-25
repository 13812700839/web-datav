import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import vueRouter from 'vue-router'
import axios from 'axios'
import echarts from 'echarts'
import echartsGL from 'echarts-gl'

Vue.config.productionTip = false
Vue.use(element)
Vue.use(vueRouter)
Vue.prototype.axios = axios
Vue.prototype.$echarts=echarts
Vue.prototype.$echartsGL=echartsGL

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
