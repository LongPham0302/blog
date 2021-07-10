import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './Page/HomePage'
import Login from './Page/Login'
import Register from './Page/Register'
import ChangePassword from './Page/ChangePassword'
import PostDetail from './Page/PostDetail'
import PostUpload from './Page/PostUpload'
import UserPage from './Page/UserPage'
import UserProfile from './Page/UserProfile'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home-page',
        component: HomePage
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/user/:id/password',
        name: 'change-password',
        component: ChangePassword
    },
    {
        path: '/post-detail/:id',
        name: 'post-detail',
        component: PostDetail
    },
    {
        path: '/upload',
        name: 'upload',
        component: PostUpload
    },
    {
        path: '/user/:id',
        name: 'user-page',
        component: UserPage
    },
    {
        path: '/user/:id/profile',
        name: 'user-profile',
        component: UserProfile
    }
]


const router = new VueRouter({
    routes
})
export default router;