<template>
  <div class="returnButton">
    <router-link to="/Cybersecurite"><span>⬅︎ Retour</span></router-link>
  </div>
  <nav>
    <div class="navFirstBlock"><p>Cybersécurité - QCM intermédiaire</p></div>
  </nav>

  <div class="d-flex justify-content-center">
    <div v-if="showScore">
      <h5 title="Results" style="font-size: 20px; margin-top: 10px">
        Votre total de points est : {{ score }} / {{ questions.length }}
      </h5>
    </div>
    <div class="card-q" v-else>
      <span
        v-if="!startQuiz"
        style="
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 5rem;
        "
      >
        <p style="width: 700px; font-size: 20px">
          Vous commencerez un QCM de 5 questions au total sur le thème des
          trames de réseau.<br /><br />
          Vous aurez seulement 20 secondes pour répondre à chacune des
          questions!<br /><br />
          Quand vous êtes prêt, cliquez sur le bouton "Commencer le quiz"
        </p>
        <button class="button accept-btn" @click="startQuizFunc()">
          Commencer le quiz
        </button>
      </span>
      <span v-else>
        <img
          src="../../assets/trame1.png"
          alt=""
          style="width: 50%; object-fit: contain"
        />

        <br />

        <b-card style="max-width: 20rem" class="mb-2">
          <b-card-text>
            <span style="font-size: 40px"
              ><strong>{{ countDown }} </strong></span
            >
          </b-card-text>

          <br />

          <b-card-text>
            Question No.{{ currentQuestion + 1 }} / {{ questions.length }}
          </b-card-text>

          <br />
          <hr />

          <b-progress
            variant="warning"
            :max="30"
            :value="countDown"
            height="4px"
          ></b-progress>

          <h5 style="font-size: 20px; margin-bottom: 10px">
            {{ questions[currentQuestion].questionText }}
          </h5>

          <div class="answer-section">
            <span
              style="font-size: 20px; margin-bottom: 20px"
              :key="index"
              v-for="(option, index) in questions[currentQuestion]
                .answerOptions"
              @click="handleAnswerClick(option.isCorrect)"
              class="ans-option-btn"
              variant="primary"
              >{{ option.answerText }}</span
            >
          </div>
        </b-card>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageCybersecuriteQCM2",

  data() {
    return {
      currentQuestion: 0,
      showScore: false,
      score: 0,
      countDown: 20,
      timer: null,
      startQuiz: false,

      questions: [
        {
          questionText:
            "Quel est le protocole réseau utilisé pour réaliser l’échange de ces trames?",
          answerOptions: [
            { answerText: "IPv4", isCorrect: true },
            { answerText: "ARP", isCorrect: false },
            { answerText: "IPv6", isCorrect: false },
            { answerText: "IEEE 802.1Q", isCorrect: false },
          ],
        },
        {
          questionText:
            "Quelle est l’adresse réseau de la machine ayant initié l’échange ?",
          answerOptions: [
            { answerText: "75.da.9c.7a", isCorrect: false },
            { answerText: "6f.5e.9b.08", isCorrect: false },
            { answerText: "84.e3.3d.17", isCorrect: true },
            { answerText: "00.00.00.00", isCorrect: false },
          ],
        },
        {
          questionText: "Quelle est sa classe d’adresse ?",
          answerOptions: [
            { answerText: "Classe A", isCorrect: false },
            { answerText: "Classe B", isCorrect: true },
            { answerText: "Classe C", isCorrect: false },
          ],
        },
        {
          questionText:
            "Quelle est l’adresse physique de la machine ayant initié l’échange ?",
          answerOptions: [
            { answerText: "00:00:00:00:00:00", isCorrect: false },
            { answerText: "75:da:9c:7a:00:00", isCorrect: false },
            { answerText: "82:ae:84:e3:3d:17", isCorrect: false },
            { answerText: "00:01:02:6f:5e:9b", isCorrect: true },
          ],
        },
        {
          questionText: "Quelle est sa classe d’adresse ?",
          answerOptions: [
            { answerText: "Classe A", isCorrect: false },
            { answerText: "Classe B", isCorrect: false },
            { answerText: "Classe C", isCorrect: true },
          ],
        },
      ],
    };
  },

  methods: {
    startQuizFunc() {
      this.startQuiz = true;
      this.countDownTimer();
    },
    handleAnswerClick(isCorrect) {
      clearTimeout(this.timer);
      let nextQuestion = this.currentQuestion + 1;
      if (isCorrect) {
        this.score = this.score + 1;
      }
      if (nextQuestion < this.questions.length) {
        this.currentQuestion = nextQuestion;
        // this.$store.state.questionAttended = this.currentQuestion;
        // localStorage.setItem('qattended', this.currentQuestion)

        this.countDown = 20;
        this.countDownTimer();
      } else {
        // localStorage.removeItem('qattended')
        this.showScore = true;
        // localStorage.setItem('testComplete',this.showScore)
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        this.timer = setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.handleAnswerClick(false);
      }
    },
  },
  created() {
    //  alert(this.$store.state.questionAttended)
    //    this.showScore = localStorage.getItem('testComplete') || false
    //    this.currentQuestion = localStorage.getItem('qattended') || 0
    //    this.countDownTimer()
    //    this.fetchQuiz()
  },
};
</script>

<style scoped>
.card {
  min-width: 100%;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
}
.card-q {
  min-width: 60%;
}
.ans-option-btn {
  min-width: 50%;
  font-size: 16px;
  color: black;
  align-items: center;
  cursor: pointer;
  margin-bottom: 5px;
}
.answer-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.timer-text {
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
}

.card-img,
.card-img-top {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  height: 350px;
}
/* .ans-option-btn {
  width: 100%;
  font-size: 16px;
  color: #ffffff;
  background-color: #252d4a;
  border-radius: 15px;
  display: flex;
  padding: 5px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid #234668;
  cursor: pointer;
} */
</style>
