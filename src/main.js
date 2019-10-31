import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '@/routen'
Vue.config.productionTip = false
// Element是个插件，包含了很多组件
Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
