import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Accueil from './components/Accueil.vue';
import PageTestMaGueule from './components/PageTestMaGueule.vue';


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/Accueil",
            name: "Accueil",
            component: Accueil
        },
        {
            path: "/BestPage",
            name: "BestPage",
            component: PageTestMaGueule
        }
    ]
})

createApp(Accueil)
    .use(router)
    .mount('#app')

