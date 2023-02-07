<template>
  <div class="returnButton">
    <router-link to="/Cybersecurite"><span>⬅︎ Retour</span></router-link>
  </div>
  <nav>
    <div class="navFirstBlock"><p>Cybersécurité - QCM Débutant</p></div>
  </nav>

  <div id="app">
    <div id="contain">
      <div id="questions" v-show="show == false">
        {{ questions[current].content }}
      </div>

      <div id="multipleChoice" v-show="show == false">
        <div
          class="answer"
          v-for="(answer, index) in questions[current].answers"
          :key="index"
          @click="questions[current].picked = index"
          :class="{ picked: questions[current].picked == index }"
        >
          {{ answer }}
        </div>

        <div id="button" v-show="show == false">
          <button id="prevButton" v-show="current > 0" @click="current--">
            Prev
          </button>
          <button
            id="nextButton"
            v-show="current < questions.length - 1"
            @click="current++"
          >
            Suivant
          </button>
          <button
            id="resultButton"
            v-show="current == questions.length - 1"
            @click="show = true"
          >
            result
          </button>
          <div style="clear: both"></div>
        </div>
      </div>

      <div id="result" v-show="show == true">
        <div>
          Votre total de points est :
          {{
            questions.filter((question) => question.picked == question.correct)
              .length
          }}
          / {{ questions.length }}
        </div>
        <button
          @click="
            show = false;
            current = 0;
            questions.forEach((question) => (question.picked = -1));
          "
        >
          Recommencer
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageCybersecuriteQCM1",

  data() {
    return {
      show: false,
      current: 0,
      questions: [
        {
          content: "Qu’est-ce qu’un bon mot de passe ?",
          answers: [
            "A. Quelque chose de personnel, facilement mémorisable",
            "B. Un mot facile à retenir, comme « motdepasse »",
            "C. Une suite d’au moins 5 lettres ou 5 chiffres",
            "4. Un ensemble d'au moins 12 caractères, de types différents",
          ],
          correct: 3,
          picked: -1,
        },
        {
          content: "Quel mot de passe requiert un maximum de sécurité ?",
          answers: [
            "A. Celui de ton compte en banque",
            "B. Celui de ta messagerie",
            "C. Celui de ton abonnement Netflix",
            "D. Tous sont aussi importants",
          ],
          correct: 3,
          picked: -1,
        },
        {
          content: "Qu'indique 'https'?",
          answers: [
            "A. Que le site a reçu le label « super », gage d’une navigation agréable",
            "B. Que le site utilise un protocole de navigation sécurisé, indispensable pour effectuer des achats",
            "C. Que le site est en fait une réunion de plusieurs sites, d’où le « s » à la fin",
          ],
          correct: 1,
          picked: -1,
        },
        {
          content: "Une « Cyber Attaque » c’est :",
          answers: [
            "A. Le titre du dernier Matrix",
            "B. Le nom d’une compile d’électro",
            "C. Une action malveillante en direction d’un système ou d’un réseau informatique",
          ],
          correct: 2,
          picked: -1,
        },
        {
          content: "Est-il risqué d’utiliser un Wi-Fi public gratuit ?",
          answers: [
            "A. Oui",
            "B. Pas du tout, sinon on appellerait ça un non-fi",
            "C. Je peux passer la question ?",
          ],
          correct: 0,
          picked: -1,
        },
      ],
    };
  },
};
</script>

<style scoped>
#contain {
  max-width: 1200px;
  height: 800px;
  margin: 30px auto;
}

#questions {
  max-width: 1000px;
  height: 150px;
  margin: 20px auto;
  font-size: 20px;
  padding: 50px 20px 20px 20px;
  background-color: #2e2f2f;
  color: white;
  text-align: center;
  line-height: 30px;
}

#multipleChoice {
  max-width: 1000px;
  margin: 20px auto;
  font-size: 20px;
  padding: 20px;
}

.answer {
  display: block;
  height: 50px;
  background-color: #c1ebe8;
  color: black;
  margin-bottom: 10px;
  padding: 10px 20px;
  line-height: 40px;
  cursor: pointer;
}

.answer.picked {
  background-color: #dc7e26;
}

button {
  padding: 10px;
  width: 80px;
  height: 45px;
}

#prevButton {
  float: left;
}

#nextButton {
  float: right;
}

#resultButton {
  float: right;
}

#result {
  margin: 0px auto;
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

#result > div {
  font-size: 24px;
  margin-top: 100px;
  flex-basis: 100%;
  text-align: center;
}
</style>
