import Vue from 'vue'
//mintui完整引入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//mui引入：
import './lib/css/mui.min.css'
// import './lib/css/icons-extra.css'
// import './lib/fonts/mui.ttf'
// import './lib/fonts/mui-icons-extra.ttf'
// import './lib/js/mui.js'
//按需引入
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
    }
})