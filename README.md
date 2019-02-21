# webapp
# 这只是学习 Vue + webpack + UI 的练习，跟随着视频所写     ———— SprWu 2019.2.17

# 顶部 Header 区域，使用 Mint-ui 中的header组件
# 中间 是一个路由 router-view，展示对应的内容
    * 制作 购物车 图标：
        + 将扩展图标的 icons-extra.css 和 mui-icons-extra-ttf 拷贝到项目中
        + .为 购物车 小图标添加对应样式
    * 路由选中高亮：
        + 找到 MUI 组件高亮代码 mui-active
        + 在路由声明(index.js)中通过 linkActiveClass 修改
        默认路由高亮类(router-link-active)
    * 点击路由 切换对应路由组件
        + 创建对应组件(注意App.vue 是否有 router-view)
        + 在路由(index.js)中配置对应url
    * 组件过渡动画：
        + 在 App.vue 内，在 router-view 外套上 transition
        + 在 style 内编写对应样式
            1. v-enter 和 v-leave-to 的 transform 所对应的X坐标将不一样
            2. position: absolute 避免过渡时组件出现位移
            3. overflow-x: hidden 避免元素移动时出现滚动条
    * HOME:
        + 轮播图插件 为Mint-UI 的 swipe (注意设置样式)
        + 获取数据使用 vue-resource (安装并导入)
            1. this.$http.get('url)
            2. 后台数据是我自己简单搭建的
            3. v-for 循环渲染 (注意使用:key,以及 img的src需v-bind绑定) 
        + 六宫格
            1. 六宫格使用 MUI 的 grid-default
            2. 改造默认六宫格的图标和文字
            3. 修改自己所需的样式
        + 六宫格之新闻资讯
            1. newslist.vue 并配置路由
            2. list组件为MUI的 media-list 并设置所需样式
            3. vue-resource 获取数据
            4. 全局过滤器 完善新闻列表
            5. 新闻资讯列表点击 跳转到新闻详情：
                (1): 每一条新闻都为 router-link, 同时跳转时提供唯一id标识符
                    通过 this.$route.params.id 获取，使用this.[listname].concat()方法拼接数据，避免新数据覆盖旧数据
                (2): 创建 新闻详情(newsinfo) 组件并设置样式
                (3): 在 路由中，将 新闻详情的 路由地址 和组件对应起来
                (4): vue-resource 获取数据(目前无api接口)
                (5): 创建评论子组件,设置样式并导入到 newsinfo 组件中
                (6): vue-resource 获取用户评论(简单模拟)
                (7): 完善 加载更多功能(未模拟后台服务)
                (8): 完善 发表评论功能(未模拟后台服务，本地添加(数组的unshift方法))
        + 六宫格之图片分享
            1. photolist.vue 并配置路由
            2. photolist 组件包括：
                (1): 顶部滑动条(MUI tab-top-webview-main),去掉slider区域的  mui-fullscreen 全屏类，需要导入js组件(mui.js)并初始化(未模拟后台服务)
                    ```
                    mui('.mui-scroll-wrapper').scroll({
                        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                    }); 
                    ```
                    坑：
                     该代码可能使用了 'caller',' callee','arguments',在严格模式下会报错
                    -> 1. 修改组件js代码(不现实) 2. 关闭webpack 严格模式(√)
                     Chrome浏览器警告
                    -> 添加样式 *{ touch-action: pan-y; }
                     滑动效果刷新页面后才可用
                    -> 将初始化代码放入 mounted(){} 生命钩子函数内
                     导致底部 tabbar(首页 会员 ...) 组件无响应
                    -> 引入mui.js后，由于 MUI 各组件与mui.js内部代码有关联导致出现异常，
                       在App.vue中，修改 mui-tab-item 名称即可(原样式复制给新样式)

                (2): 图片展示区(Mint-ui Lazy-load)
        + 缩略图 (vue-preview)插件
        + 六宫格之商品购买
            1. 两列布局 主要是css3的运用
        
        
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
