// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 mint-ui 组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入 MUI 组件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入 Vue-resource 
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false
// console.log('Init Ok')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
