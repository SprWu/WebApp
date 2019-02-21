// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// * 导入 mint-ui 组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// * 导入 MUI 组件
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// * 导入 Vue-resource 
import VueResource from 'vue-resource'
Vue.use(VueResource)

// * 导入 图片预览插件 vue-preview
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 设置请求根路径
//Vue.http.options.root = 'url'


// * 全局过滤器 
//避免因为没有url存储的数组(picInfo[0])而出现错误
Vue.filter('dataFormat',function(dataStr){
  // 没有url存储的数组则返回 404图片
  if(dataStr === undefined)
    return 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550655956000&di=11d87b7e9c14f806e1146ed67df87b22&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F019ea4554be28b000001bf72381f24.jpg'
  // 有url存储的数组则返回 url
  return dataStr.url
})
//时间格式
Vue.filter('timeCorrect',function(dataStr){
  var dt = new Date(dataStr)
  var y = dt.getFullYear()
  //padStart()是字符串的方法 所以要先转换成字符串类型
  var m = (dt.getMonth()+1).toString().padStart(2,'0')
  var d = (dt.getDate()).toString().padStart(2,'0')
  var hh = (dt.getHours()).toString().padStart(2,'0')
  var mm = (dt.getMinutes()).toString().padStart(2,'0')
  var ss = (dt.getSeconds().toString().padStart(2,'0'))
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})

Vue.config.productionTip = false
// console.log('Init Ok')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
