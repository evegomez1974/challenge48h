import { createRouter, createWebHashHistory } from "vue-router";
import PageAccueil from './components/Accueil.vue';
import EnigmeCastle from './components/EnigmeCastle.vue';
import CastleWalls from './components/CastleWalls.vue';
import TreasuresRoom from './components/TreasureRoom.vue';
import PierrePhilosophale from './components/PierrePhilosophale.vue';
import Developpement from './components/Developpment.vue';
import PageFindmdp from './components/Findmdp.vue';
import Cybersecurite from './components/Cybersecurite.vue';
import cyberqcm1 from './components/cyber/qcm1.vue';
import cyberqcm2 from './components/cyber/qcm2.vue';
import cyberqcm3 from './components/cyber/qcm3.vue';

const routes =[
    {
        path: "/",
        name: "PageAccueil",
        component: PageAccueil
    },
    {
        path: "/EnigmeCastle",
        name: "EnigmeCastle",
        component: EnigmeCastle
    },
    {
        path: "/CastleWalls",
        name: "CastleWalls",
        component: CastleWalls
    },
    {
        path: "/Developpment",
        name: "PageDeveloppment",
        component: Developpement
    },
    {
        path: "/findmdp",
        name: "PageFindmdp",
        component: PageFindmdp
    },
    {
        path: "/TreasuresRoom",
        name: "TreasuresRoom",
        component: TreasuresRoom
    },
    {
        path: "/Castle/ProfesseurYnofou/PierrePhilosophale",
        name: "PierrePhilosophale",
        component: PierrePhilosophale
    },
    
    // cyber
    {
        path: "/Cybersecurite",
        name: "PageCybersecurite",
        component: Cybersecurite
    },
    {
        path: "/cyberqcm1",
        name: "PageCybersecuriteQCM1",
        component: cyberqcm1
    },
    {
        path: "/cyberqcm2",
        name: "PageCybersecuriteQCM2",
        component: cyberqcm2
    },
    {
        path: "/cyberqcm3",
        name: "PageCybersecuriteQCM3",
        component: cyberqcm3
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;