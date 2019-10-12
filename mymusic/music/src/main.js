import Vue from 'vue';
import App from './App.vue';
// 路由配置
import router from './router';
// vuex仓
import store from './store';
// 重置标签样式
import './assets/css/reset.css';
// 公共样式
import './assets/css/common.css';
// 字体图标
import './assets/fonts/iconfont.css';
// 移动端适配
import 'lib-flexible';
// 轮播图插件和样式
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

// 懒加载插件
import VueLazyLoad from 'vue-lazyload';
Vue.use(VueLazyLoad, {
  loading: '/load.gif'
});

Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
