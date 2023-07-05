import AboutPage from "./../components/AboutPage.vue";
import HomePageMain from "./../components/HomePageMain.vue";
import ResumePage from './../components/ResumePage.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
    },
    {
        path: "/homePage",
        name: "HomePageMain",
        component: HomePageMain
    },
    {
        path: "/resume",
        name: "ResumePage",
        component: ResumePage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_url),routes
});

export default router;