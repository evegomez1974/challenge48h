import { createRouter, createWebHashHistory } from "vue-router";
import PageAccueil from './components/Accueil.vue';
import Enigme1 from './components/Enigme1.vue';
import Developpement from './components/Developpment.vue';


const routes =[
    {
        path: "/",
        name: "PageAccueil",
        component: PageAccueil
    },
    {
        path: "/Enigme1",
        name: "Enigme1",
        component: Enigme1
    },
    {
        path: "/Developpment",
        name: "PageDeveloppment",
        component: Developpement
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;