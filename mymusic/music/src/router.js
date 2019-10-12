import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Recommend from './views/recommend.vue';
import Rank from './views/rank.vue';
import PlayListView from './views/playListView.vue';
import Artists from './views/artists.vue';
Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    }, {
      path: '/playListView',
      name: 'playListView',
      component: PlayListView,
    }, {
      path: '/rank',
      name: 'rank',
      component: Rank,
    },
    {
      path: '/artists',
      name: 'artists',
      component: Artists,
    }
  ],
});
