import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'
import Index from '../components/index/Index.vue'
import Intro from '../components/index/Intro.vue'
import Direct from '../components/index/Direction.vue'
import Member from '../components/index/Member.vue'
import Prize from '../components/index/Prize.vue'
import About from '../components/index/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/index' },
    {
      path: '/login',
      component: Login,
      meta: { title: '登录 | 择栖工作室' }
    },
    {
      path: '/register',
      component: Register,
      meta: { title: '注册 | 择栖工作室' }
    },
    {
      path: '/home',
      component: Home,
      redirect: '/index',
      meta: { title: '首页 | 择栖工作室' },
      children: [
        {
          path: '/index',
          component: Index,
          meta: { title: '首页 | 择栖工作室' }
        },
        {
          path: '/intro',
          component: Intro,
          meta: { title: '工作室简介 | 择栖工作室' }
        },
        {
          path: '/direction',
          component: Direct,
          meta: { title: '技术方向 | 择栖工作室' }
        },
        {
          path: '/member',
          component: Member,
          meta: { title: '主要成员 | 择栖工作室' }
        },
        {
          path: '/prize',
          component: Prize,
          meta: { title: '荣誉奖项 | 择栖工作室' }
        },
        {
          path: '/about',
          component: About,
          meta: { title: '关于我们 | 择栖工作室' }
        }
      ]
    }
  ]
})
