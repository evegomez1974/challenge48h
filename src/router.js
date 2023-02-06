import { createRouter, createWebHashHistory } from "vue-router";
import PageAccueil from './components/Accueil.vue';
import PageTestMaGueule from './components/PageTestMaGueule.vue';
import PageFindmdp from './components/Findmdp.vue';

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
    },
    {
        path: "/findmdp",
        name: "PageFindmdp",
        component: PageFindmdp
    }

];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;