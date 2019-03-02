import Vue from 'vue'
import Router from 'vue-router'
import index from './page/index.vue'
import loadin from './page/loadin.vue'
import forgot_paw from './page/forgot_paw.vue'
import shouyoujian from './page/shouyoujian.vue'
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

    }, {
            path: '/forgot_paw',
            name: 'forgot_paw',
            component: forgot_paw,
            meta: {
                title: '忘记密码'
            }

    }, {
            path: '/shouyoujian',
            name: 'shouyoujian',
            component: shouyoujian,
            meta: {
                title: '收件发出提示'
            }

    }
  ]
})
