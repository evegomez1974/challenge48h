<template>
  <div class="pitchHistoire">
    <div class="pitch">
      <h1>FELICITATION VOUS AVEZ REUSSI LE CHALLENGE 48H D'YNOV AIX</h1>

      <p>
        Félicitations! Après de nombreuses recherches, vous avez enfin trouvé la
        Pierre Philosophale! Votre détermination et votre intelligence vous ont
        finalement mené à ce trésor ultime. Profitez de votre réussite et de la
        découverte de la Pierre Philosophale! Cependant, la quête n'est pas
        terminée. Vous devez maintenant sortir du château et transporter la
        Pierre en toute sécurité. Soyez prêt pour de nouveaux défis qui vous
        attendent sur votre chemin vers la victoire finale. Nous espérons que
        vous avez apprécié votre aventure et nous vous attendons bientôt pour de
        nouvelles aventures passionnantes.
      </p>
    </div>

          <router-link to="/"
        ><button class="buttonCastle">
          SORTEZ DU CHATEAU !!
        </button></router-link
      >

    <div>
      <img
        class="indice1"
        src="../assets/emplacements/emplacement1.png"
        alt="test"
      />
      <img
        class="indice2"
        src="../assets/emplacements/emplacement1.png"
        alt="test"
      />
      <img
        class="indice3"
        src="../assets/emplacements/emplacement1.png"
        alt="test"
      />
      <img
        class="indice4"
        src="../assets/emplacements/emplacement1.png"
        alt="test"
      />
      <img
        class="indice5"
        src="../assets/emplacements/emplacement1.png"
        alt="test"
      />
      <img
        class="indice6"
        src="../assets/emplacements/emplacement1.png"
        alt="test"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageEnigme1",
};
</script>

<style scoped>
.pitchHistoire {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/pierre_philosophale.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px black;
}

.pitch {
  margin: 100px;
}

h1 {
  margin-bottom: 60px;
}

.buttonCastle {
  height: 10vh;
  width: 20vw;
  background: transparent;
  border: dashed white;
  color: white;
  font-weight: 900;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px black;
}

.indice1 {
  position: fixed;
  top: 12vh;
  left: 20vw;
  height: 0.5vh;
  width: auto;
  color: transparent;
}

.indice2 {
  position: fixed;
  top: 58vh;
  left: 52vw;
  height: 0.5vh;
  width: auto;
  color: transparent;
}

.indice3 {
  position: fixed;
  top: 30vh;
  left: 5vw;
  height: 0.5vh;
  width: auto;
  color: transparent;
}

.indice4 {
  position: fixed;
  top: 5vh;
  left: 48vw;
  height: 0.5vh;
  width: auto;
  color: transparent;
}

.indice5 {
  position: fixed;
  top: 65vh;
  left: 70vw;
  height: 0.5vh;
  width: auto;
  color: transparent;
}

.indice6 {
  position: fixed;
  top: 25vh;
  left: 25vw;
  height: 0.5vh;
  width: auto;
  color: transparent;
}
</style>