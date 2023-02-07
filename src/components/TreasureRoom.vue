<template>
  <div class="pitchHistoire">
    <div class="pitch">
      <h1>
        FELICITATION VOUS VOICI DANS L'ENIGME 3 DU CHALLENGE 48H D'YNOV AIX
      </h1>

      <p>
        Félicitations, vous avez finalement trouvé la salle aux trésors du
        professeur ynofou! Cependant, la Pierre Philosophale n'est pas aussi
        facile à trouver que vous ne le pensiez. Le professeur ynofou a laissé
        une dernière énigme complexe qui vous mènera à la Pierre. Il semble que
        le professeur ynofou a mélangé les mots de l'emplacement où se trouve la
        Pierre. Vous devez maintenant retrouver l'ordre correct des mots pour
        découvrir où se trouve la Pierre. Mais soyez rapide, car le temps est
        compté et vous ne savez jamais quand le professeur ynofou pourrait
        surgir. C'est l'heure de mettre à l'épreuve vos compétences en
        observation et en résolution de problèmes pour trouver la Pierre
        Philosophale et remporter la victoire. Bonne chance!
      </p>
    </div>

    <div>
      <img
        class="indice1"
        src="../assets/emplacements/emplacement1.png"
        alt="test"
      />
      <img
        class="indice2"
        src="../assets/emplacements/emplacement2.png"
        alt="test"
      />
      <img
        class="indice3"
        src="../assets/emplacements/emplacement3.png"
        alt="test"
      />
      <img
        class="indice4"
        src="../assets/emplacements/emplacement4.png"
        alt="test"
      />
      <img
        class="indice5"
        src="../assets/emplacements/emplacement5.png"
        alt="test"
      />
      <img
        class="indice6"
        src="../assets/emplacements/emplacement6.png"
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
  background-image: url("../assets/treasure.jpg");
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
  width: 15vw;
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