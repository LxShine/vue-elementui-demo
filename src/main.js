import Vue from 'vue'
import App from './components/App'
import router from './router'
import axios from './api/axio_config.js'
import {dateFormat} from './common/utils.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$http = axios
Vue.prototype.$dateFormat = dateFormat

Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
