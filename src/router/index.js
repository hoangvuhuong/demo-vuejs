import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../components/HelloWorld.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    // {
    //     path: "/unauthorized",
    //     name: "unauthorized",
    //     component: () => import("@/views/unauthorized/UnauthorizedView.vue"),
    // },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
