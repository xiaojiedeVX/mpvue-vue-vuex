import Vue from 'vue'
import App from './App'
import store from './store/index'
import '../colorui.wxss'
import '../icon.wxss'
Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store;
const app = new Vue(App)
app.$mount()
