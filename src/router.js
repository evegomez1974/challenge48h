import { createRouter, createWebHashHistory } from "vue-router";
import PageAccueil from './components/Accueil.vue';
import PageTestMaGueule from './components/PageTestMaGueule.vue';

const routes =[
    {
        path: "/Accueil",
        name: "PageAccueil",
        component: PageAccueil
    },
    {
        path: "/BestPage",
        name: "BestPage",
        component: PageTestMaGueule
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;