import { createRouter, createWebHashHistory } from "vue-router";
import PageAccueil from './components/Accueil.vue';
import EnigmeCastle from './components/EnigmeCastle.vue';
import CastleWalls from './components/CastleWalls.vue';
import TreasuresRoom from './components/TreasureRoom.vue';
import PierrePhilosophale from './components/PierrePhilosophale.vue';
import Developpement from './components/Developpment.vue';
import PageFindmdp from './components/Findmdp.vue';
import PageNativeCode from './components/NativeCode.vue';

import Cybersecurite from './components/Cybersecurite.vue';
import cyberqcm1 from './components/cyber/qcm1.vue';
import cyberqcm2 from './components/cyber/qcm2.vue';
import cyberqcm3 from './components/cyber/qcm3.vue';

import PageDebutAventure from './components/DebutAventure.vue';
import PageAventure from './components/aventure/Aventure.vue';
import PageSauve from './components/aventure/sauve.vue';
import PageMessage from './components/aventure/message.vue';
import PageNegatifs from './components/aventure/negatifs.vue';
import PagesuspectDevoile from './components/aventure/suspectDevoile.vue';
import PageGGBGTATROUVELESUS from './components/aventure/GGBGTATROUVELESUS.vue';
import PageCoffeeShop from './components/aventure/CoffeeShop.vue';
import PagePrems from './components/aventure/premiers.vue';
import Page504A from './components/aventure/Page504.vue';


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
    {
        path: "/nativecode",
        name: "PageNativeCode",
        component: PageNativeCode
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
    // AventureDev
    {
        path: "/aventure",
        name: "PageAventure",
        component: PageAventure
    },
    {
        path: "/debut",
        name: "PageDebutAventure",
        component: PageDebutAventure
    },
    {
        path: "/sauve",
        name: "PageSauve",
        component: PageSauve
    },
    {
        path: "/message",
        name: "PageMessage",
        component: PageMessage
    },
    {
        path: "/negatifs",
        name: "PageNegatifs",
        component: PageNegatifs
    },
    {
        path: "/suspectDevoile",
        name: "PagesuspectDevoile",
        component: PagesuspectDevoile
    },
    {
        path: "/GGBGTATROUVELESUS",
        name: "PageGGBGTATROUVELESUS",
        component: PageGGBGTATROUVELESUS
    },
    {
        path: "/CoffeeShop",
        name: "PageCoffeeShop",
        component: PageCoffeeShop
    },
    {
        path: "/premiers",
        name: "PagePrems",
        component: PagePrems
    },
    {
        path: "/504",
        name: "Page504A",
        component: Page504A
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router;