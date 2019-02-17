# webapp
# 这只是学习 Vue + webpack + UI 的练习，跟随着视频所写     ———— SprWu 2019.2.17

# 顶部 Header 区域，使用 Mint-ui 中的header组件
# 中间 是一个路由 router-view，展示对应的内容
    + 制作 购物车 图标：
        1.将扩展图标的 icons-extra.css 和 mui-icons-extra-ttf 拷贝到项目中
        2.为 购物车 小图标添加对应样式
    + 路由选中高亮：
        1.找到 MUI 组件高亮代码 mui-active
        2.在路由声明(index.js)中通过 linkActiveClass 修改
        默认路由高亮类(router-link-active)
    + 点击路由 切换对应路由组件
        1.创建对应组件(注意App.vue 是否有 router-view)
        2.在路由(index.js)中配置对应url
# 底部 Tabbar 区域，使用 MUI 的 Tabbar.html
> 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit/

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
