import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../view/Home.vue'
import Progress from '../view/Progress.vue'
import Chart from '../view/Chart.vue'
import Chatting from '../view/Chatting.vue'
import Login from '../view/Login.vue'
import Room from '../view/Room.vue'
import NotFound from '../components/NotFound.vue'
import store from '../store'

Vue.use(VueRouter)

const requireAuth = () => (from, to, next) => {
  !!store.state.accessToken ?
    next() :
    next(`/login?returnPath=${encodeURIComponent(from.path)}`)
}

const router = new VueRouter({
  mode: 'history',
  routes: [
//    {path: '/', component: Home},
    {path:'/', component:()=> import('../view/Home')},
    {path: '/chart', component: Chart},
    {path: '/progress', component: Progress},
    {path: '/chatting', component: Chatting},
    {path: '/room/:rid', component: Room},//beforeEnter: requireAuth()},
    {path: '/login', component: Login},
    {path: '*', component: NotFound}
  ]
})

export default router
