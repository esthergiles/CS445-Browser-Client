import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  // {
  //   path: '/schedule',
  //   name: 'Schedule',
  //   component: () => import('../views/Schedule.vue')
  // },
  // {
  //   path: '/report',
  //   name: 'Report',
  //   component: () => import('../views/Report.vue')
  // },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/RegisterAccount.vue')
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import('../components/ForgotPassword.vue')
  },
  {
    path: '/student',
    name: 'Student',
    component: () => import('../views/Student.vue')
  },
  {
    path: '/tutor',
    name: 'Tutor',
    component: () => import('../views/Tutor.vue')
  },
  {
    path: '/faculty',
    name: 'Faculty',
    component: () => import('../views/Faculty.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../components/Settings.vue')
  },
  {
    path: '/generatereport',
    name: 'GenerateReport',
    component: () => import('../components/GenerateReport.vue')
  },
  {
    path: '/selectManageUser',
    name: 'SelectManageUser',
    component: () => import('../components/SelectManageUser.vue')
  },
  {
    path: '/manageUser',
    name: 'manageUser',
    component: () => import('../components/ManageUser.vue')
  },
  {
    path: '/updateUserInfo',
    name: 'updateUserInfo',
    component: () => import('../components/UpdateUserInfo.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
