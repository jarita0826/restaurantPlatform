import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const routes = [{
        path: '/signin',
        name: 'sign-in',
        component: () =>
            import ('../views/SignIn.vue')
    },
    {
        path: '/signup',
        name: 'sign-up',
        component: () =>
            import ('../views/SignUp.vue')
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',

        component: () =>
            import ('../views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router