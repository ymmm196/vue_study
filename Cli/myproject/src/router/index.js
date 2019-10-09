import Vue from 'vue'
//使用vue-router的步骤

//  1. 引入vue-router
import VueRouter from 'vue-router';

// 2.使用vue-router （VueRouter是作为插件增强Vue的功能）
Vue.use(VueRouter);

import Home from '../pages/Home.vue';
import Cart from '../pages/Cart.vue';
import Reg from '../pages/Reg.vue';
import Login from '../pages/Login.vue';
import NotFound from '../pages/NotFound.vue';
// 3.实例化router并配置参数
let router = new VueRouter({
    // 配置参数：不通的URL 显示不通的内容
    routes: [
        // 首页
        {
            name: 'home',
            path: '/home', //当浏览器地址为 /home 时，显示Home组件的内容
            component: Home
        },
        {
            path: '/',
            redirect: '/home'
        },
        // 购物车
        {
            name: 'cart',
            path: '/cart',
            component: Cart
        },
        {
            name: 'reg',
            path: '/reg',
            component: Reg
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }, {
            name: '404',
            path: '/404',
            component: NotFound
        }, {
            path: '*',
            redirect: '/404'
        }
    ]
});

// 5.在组件中使用VueRouter

export default router;