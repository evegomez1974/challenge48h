import { createRouter, createWebHashHistory } from "vue-router";
import PageAccueil from './components/Accueil.vue';
import PageTestMaGueule from './components/Enigme1.vue';

const routes =[
    {
        path: "/Accueil",
        name: "PageAccueil",
        component: PageAccueil
    },
    {
        path: "/Enigme1",
        name: "Enigme1",
        component: PageTestMaGueule
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;