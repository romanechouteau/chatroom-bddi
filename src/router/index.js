import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMoment from 'vue-moment'
import VueChatScroll from 'vue-chat-scroll'
import VueSimpleSVG from 'vue-simple-svg'
import VueAnime from 'vue-animejs'
import Chat from '../views/Chat.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)
Vue.use(VueChatScroll)
Vue.use(VueMoment)
Vue.use(VueSimpleSVG)
Vue.use(VueAnime)

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/logout',
    beforeEnter () {
      store.logout()
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })
  if (requiresAuth && !store.$data.isRegistered) {
    next('/login')
  } else {
    next()
  }
})

export default router
