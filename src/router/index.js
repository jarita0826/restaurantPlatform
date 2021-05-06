import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/restaurants",
        name: "Restaurants",
        component: () =>
            import ("../views/Restaurants/Index.vue"),
    },
    {
        path: "/restaurants/feeds",
        name: "Feeds",
        component: () =>
            import ("../views/Restaurants/Feeds.vue"),
    },
    {
        path: "/restaurants/top",
        name: "Top",
        component: () =>
            import ("../views/Restaurants/Top.vue"),
    },
    {
        path: "/restaurants/:id",
        component: () =>
            import ("../views/Restaurants/Id.vue"),
    },
    {
        path: "/users/top",
        name: "UsersTop",
        component: () =>
            import ("../views/Users/Top.vue"),
    },
    {
        path: "/users/:id",
        component: () =>
            import ("../views/Users/Id.vue"),
    },
    {
        path: "/admin/categories",
        name: "Categories",
        component: () =>
            import ("../views/Admin/Categories.vue"),
    },
    {
        path: "/admin/create",
        name: "Create",
        component: () =>
            import ("../views/Admin/Create.vue"),
    },
    {
        path: "/admin/restaurants",
        name: "AdminRestaurants",
        component: () =>
            import ("../views/Admin/Restaurants.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;