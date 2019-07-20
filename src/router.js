
//导入vue-router
import VueRouter from 'vue-router'

//导入组件，，
import Home from './components/tabbar/home.vue'
import Shopcart from './components/tabbar/shopcart.vue'
import Search from './components/tabbar/search.vue'
import Member from './components/tabbar/member.vue'

var router = new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        {path:'/shopcart',component:Shopcart},
        {path:'/search',component:Search},
        {path:'/member',component:Member}
    ],
    linkActiveClass:'mui-active'
})
export default router