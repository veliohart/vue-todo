import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import SIGN_IN_ROUTE from '@/pages/SignIn/SignIn.route'
import SIGN_UP_ROUTE from '@/pages/SignUp/SignUp.route'
import TODO_ROUTE from '@/pages/todo/todo.route'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    SIGN_IN_ROUTE,
    SIGN_UP_ROUTE,
    TODO_ROUTE,
    {
      path: '/about',
      name: 'about',
      component: Hello
    }
  ]
})
