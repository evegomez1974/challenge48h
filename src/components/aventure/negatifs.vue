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
                Après avoir interrogé le suspect potentiel, il est clair que celui-ci n'est pas le principal commanditaire de l'affaire.
                Par contre, il avait des informations croustillantes à vous donner ce qui va vous permettre d'écarter un certain nombre de suspects potentiels. <br/>
                Tous ceux qui ne sont plus suspectés ont un numéro négatif. Combien reste-t-il de suspects ?
            </div>

            <form @submit.prevent="valide">
                <label class="answer" for="reponse">{{ tabNeg }}</label>
                <div class="centrer">
                    <input class="inputBeau" type="text" id="reponse" v-model="reponse" placeholder="?" />
                </div>
                <button class="button" v-on:click="valide">Valider</button>
            </form>


            <div v-if="showMessageIncorrect">
                <p id="incorrect">Je ne pense pas que ça soit la bonne réponse...</p>
            </div>

            <div v-if="showMessageCorrect">
                <p id="correct">OH MAIS OUI, C'EST ÇA, BIEN JOUÉ ! Passons à <br /><button class="button"><router-link
                            to="/premiers"><span>LA SUITE</span></router-link></button></p>
            </div>
        </div>
    </div>
</template>

<script>
//import { Console } from 'console';

export default {
    name: "PageNegatifs",
    data() {
        return {
            reponse: "",
            showMessageIncorrect: false,
            showMessageCorrect: false,

            tabNeg: Array.from({ length: 150 }, () => Math.floor(Math.random() * 100 - 50 )),
        };
    },
    methods: {
        valide() {
            var tabAnswer = this.tabNeg.filter(function(x){ return x >= 0 });
            const correctAnswer = tabAnswer.length.toString();
            //console.log(correctAnswer);
            if (
                this.reponse === correctAnswer
            ) {
                console.log("Answer is correct !");
                this.showMessageCorrect = true;
                this.showMessageIncorrect = false;
            } else {
                console.log("That's not the good answer");
                this.showMessageIncorrect = true;
                this.showMessageCorrect = false;
            }
        },
    },
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
    max-height: 250px;
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
</style>
