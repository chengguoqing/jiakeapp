import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import loadin from './page/loadin.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: index,
            meta: {
                title: '标题'
            }

    }, {
            path: '/loadin',
            name: 'loadin',
            component: loadin,
            meta: {
                title: '登录'
            }

    }
  ]
})
