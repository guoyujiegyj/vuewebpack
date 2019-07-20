import Vue from 'vue'

//导入路由模块
import VueRouter from 'vue-router'
//导入路由js
import router from './router.js'
//注册路由
Vue.use(VueRouter)

//mintui完整引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

//mui引入：
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

//按需引入mintui
// import { Header } from 'mint-ui'
// Vue.component(Header.name,Header)
//导入App组件
import app from './app.vue'

var vm = new Vue({
    el:'#app',
    data:{},
    methods:{

    },
    render:function(elem){
        //将App组件渲染到index
        return elem(app)
    },
    router

})