import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  NotFound, Home, MainHome,CreatePost, EditPost, EditProfile, MyPost, UserDashboard,
  Login, Register, ResetPassword, About, ApplyResetPassword, ShowPost, ShowProfile
} from './views'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      name: 'home',
      path: '/',
      meta: { title: 'Home' },
      component: Home
    },  
    {
      name: 'main-home',
      path: '/home',
      meta: { title: 'Home' },
      component: MainHome
    },
    {
      name: 'about',
      path: '/about',
      meta: { title: 'About' },
      component: About
    },
    {
      name: 'login',
      path: '/login',
      meta: { title: 'Login' },
      component: Login
    },
    {
      name: 'register',
      path: '/register',
      meta: { title: 'Register' },
      component: Register
    },  
    {
      name: 'apply-reset-password',
      path: '/apply-reset-password/',
      meta: { title: 'Apply Reset Password' },
      component: ApplyResetPassword
    },
    {
      name: 'reset-password',
      path: '/reset-password/:token',
      meta: { title: 'Reset Password' },
      component: ResetPassword
    },
    {
      name: 'show-post',
      path: '/show-post/:token',
      meta: { title: 'Show Post' },
      component: ShowPost
    },
    {
      name: 'show-profile',
      path: '/profile/:token',
      meta: { title: 'Show Profile' },
      component: ShowProfile
    },
    {
      name: 'create-post',
      path: '/create-post',
      meta: { title: 'Create Post' },
      component: CreatePost
    },
    {
      name: 'edit-post',
      path: '/edit-post/:token',
      meta: { title: 'Edit Post' },
      component: EditPost
    },
    {
      name: 'user-dashboard',
      path: '/mydashboard/',
      meta: { title: 'My DashBoard' },
      component: UserDashboard,
      children: [
        {
          name: 'edit-profile',
          path: '/edit-profile/:token',
          meta: { title: 'Edit Profile' },
          component: EditProfile
        },
        {
          name: 'my-post',
          path: '/mypost',
          meta: { title: 'My Post' },
          component: MyPost
        },
      ]
    },
    {
      path: '*', 
      // redirect: '/',
      meta: { title: '404 Not Found' },
      component: NotFound
    },
  ]
})

