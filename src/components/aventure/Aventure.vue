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
            <div id="questions" >
                Comme vous le savez, vous êtes le meilleur inspecteur de tout Ynoville. 
                Toutes les enquêtes urgentes sont résolues, et il est temps pour vous de vous replonger dans de vieux dossiers poussiereux.

                C'est à ce moment là que votre chef arrive, vous réclamant vos résultats annuels. 

                Calculez-vite la somme de toutes vos actions de l'année !
            </div>
            
            <form @submit.prevent="valide">
                <label class="answer" for="reponse">Actions = {{tableauActions}}</label>
                <div class="centrer">
                <input class="inputBeau" type="text" id="reponse" v-model="reponse" placeholder="?" />
                </div>
                <button class="button" v-on:click="valide">Valider</button>
            </form>
        

            <div v-if="showMessageIncorrect">
                <p id="incorrect">Je ne pense pas que ça soit la bonne réponse....</p>
            </div>

            <div v-if="showMessageCorrect">
                <p id="correct">OH MAIS OUI, C'EST ÇA, BIEN JOUÉ ! Passons à <br/><button class="button"><router-link to="/sauve"><span>LA SUITE</span></router-link></button></p>
            </div>
        </div>
    </div>
</template>

<script>
//import { Console } from 'console';

export default {
    name: "PageAventure",
    data() {
        return {
            reponse: "",
            showMessageIncorrect: false,
            showMessageCorrect: false,
            
            tableauActions : Array.from({length: 150}, () => Math.floor(Math.random() * 250 +1)),
        };
    },
    methods: {
        valide() {
            var somme = 0;
            for (var i =0; i < this.tableauActions.length; i++){
                somme += this.tableauActions[i]
            }
            const correctAnswer = somme.toString();
            //console.log(somme);
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
    max-height: 150px;
    background-color: #c1ebe8;
    color: black;
    margin-bottom: 10px;
    padding: 10px 20px;
    line-height: 40px;
}


.centrer{
    display:flex;
    justify-content:center;
}
.inputBeau{
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
