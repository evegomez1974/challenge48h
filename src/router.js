import { createRouter, createWebHashHistory } from "vue-router";
import PageAccueil from './components/Accueil.vue';

const routes =[
    {
        path: "/",
        name: "PageAccueil",
        component: PageAccueil
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;