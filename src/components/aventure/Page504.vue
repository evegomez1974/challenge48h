<template>
    <div class="returnButton">
        <router-link to="/Debut"><span>⬅︎ Retour</span></router-link>
    </div>
    <nav>
        <div class="navFirstBlock">
            <p>Un problème d'algo</p>
        </div>
    </nav>

    <div id="app">
        <div id="contain">
            <div id="questions">
                VA A LA PAGE GGBGTATROUVELESUS
               
            </div>
        
            <p>
                <button class="button"><router-link
                            to="/aventure">Retour à l'accueil</router-link></button></p> 
        </div>
    </div>
</template>

<script>
//import { Console } from 'console';

export default {
    name: "Page504A"
}
</script>

<style scoped>
#contain {
    max-width: 1200px;
    height: 800px;
    margin: 30px auto;
}

#questions {
    max-width: 1000px;
    max-height: 350px;
    margin: 20px auto;
    font-size: 20px;
    padding: 50px 20px 20px 20px;
    background-color: #2e2f2f;
    color: white;
    text-align: center;
    line-height: 30px;
}

.answer {
    display: block;
    max-height: 250px;
    background-color: #c1ebe8;
    color: black;
    margin-bottom: 10px;
    padding: 10px 20px;
    line-height: 40px;
}


.centrer {
    display: flex;
    justify-content: center;
}

.inputBeau {
    height: 50px;
    background-color: #c1ebe8;
    color: black;
    margin-bottom: 10px;
    padding: 10px 20px;
    line-height: 40px;
}

/* Animations des boutons, ne pas changer */
@keyframes slideMe {
    0% {
        transform: skewX(53deg) translateX(500px);
    }

    100% {
        transform: skew(0deg);
    }
}

@keyframes slideMeOut {
    0% {
        transform: skewX(-53deg) translateX(-500px);
    }

    100% {
        transform: skew(0deg);
    }
}

.button {
    width: 150px;
    height: 100px;
    font-size: 11px;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
}

.button:hover {
    background-color: #f3270b;
    box-shadow: 0px 15px 20px rgba(243, 42, 11, 0.4);
    color: #fff;
    transform: translateY(-7px);
}

.button:hover {
    background-color: #23b1a5;
    box-shadow: 0px 15px 20px #0000005e;
    color: #fff;
    transform: translateY(-7px);
}

@keyframes tournehoraire {
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.chakitourne{
    position:absolute;
    animation : tournehoraire;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    top : 100%;
    left : 10%;
}


@keyframes tourneantihoraire {
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}

.chakitourne2{
    position:absolute;
    animation : tourneantihoraire;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    top : 100%;
    right : 10%;
}
</style>
