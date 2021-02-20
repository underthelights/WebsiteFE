import NotFound from './general/404.vue'
import Home from './general/Home.vue'
import About from './general/About.vue'
import MainHome from './post/MainHome.vue'


const Login = () => import(/* webpackChunkName: "identity" */ '@/views/identity/Login.vue')
const Register = () => import(/* webpackChunkName: "identity" */ '@/views/identity/Register.vue')
const ResetPassword = () => import(/* webpackChunkName: "identity" */ '@/views/identity/ResetPassword.vue')
const ApplyResetPassword = () => import(/* webpackChunkName: "identity" */ '@/views/identity/ApplyResetPassword.vue')


const CreatePost = () => import(/* webpackChunkName: "post" */ '@/views/post/CreatePost.vue')
const EditPost = () => import(/* webpackChunkName: "post" */ '@/views/post/EditPost.vue')
const ShowPost = () => import(/* webpackChunkName: "post" */ '@/views/post/ShowPost.vue')


const EditProfile = () => import(/* webpackChunkName: "user" */ '@/views/user/EditProfile.vue')
const MyPost = () => import(/* webpackChunkName: "user" */ '@/views/user/MyPost.vue')
const UserDashboard = () => import(/* webpackChunkName: "user" */ '@/views/user/UserDashboard.vue')
const ShowProfile = () => import(/* webpackChunkName: "user" */ '@/views/user/ShowProfile.vue')

export {
    NotFound, Home, MainHome,CreatePost, EditPost, EditProfile, MyPost, UserDashboard, ShowProfile, Login, Register, ResetPassword, About, ApplyResetPassword, ShowPost
}