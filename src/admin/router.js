import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import { store } from "./store/entry"
//укажем что вью должен использовать вью роутер
Vue.use(VueRouter)


import admin from './components/admin.vue'
import about from './components/about/about.vue'
import works from './components/works/works.vue'
import blog from './components/blog/blog.vue'
//создадим массив с роутами (пути по которым должны отображаться компоненты)
const routes = [
    {
        path: '/',
        component: admin,
        meta: {
            public: true
        }
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/blog',
        component: blog
    },
    {
        path: '/works',
        component: works
    }
]

//экспортируем пути
// export default new VueRouter({ routes, mode: 'history' });
const router = new VueRouter ({routes, mode: 'history'});

const guard = axios.create({
    baseURL: "https://webdev-api.loftschool.com",
})
router.beforeEach((to, from,next) => {
    const isPublicRoute = to.matched.some(record=> record.meta.public);
    const isUserAuthorized = store.state.user.isAuth;
    // console.log(isUserAuthorized);
    if(isPublicRoute === false && isUserAuthorized === false) {
        guard.get('/user', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(response => {
            next()
        }).catch(error => {
            router.replace('/')
            localStorage.removeItem('token')
        })
    } else {
        next()
    }
})
export default router;