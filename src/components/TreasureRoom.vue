<template>
  <div class="pitchHistoire">
    <div class="pitch">
      <h1>
        FELICITATION VOUS VOICI DANS L'ENIGME 3 DU CHALLENGE 48H D'YNOV AIX
      </h1>

      <p>
        Félicitations, vous avez finalement trouvé la salle aux trésors du
        professeur ynofou! Cependant, la Pierre Philosophale n'est pas aussi facile à
        trouver que vous ne le pensiez. Le professeur ynofou a laissé une dernière
        énigme complexe qui vous mènera à la Pierre. Vous devez résoudre cette
        énigme rapidement, car le temps est compté et le professeur ynofou pourrait
        arriver à tout moment. C'est le moment de mettre à profit toutes vos
        compétences d'observation et de résolution de problèmes pour trouver la
        Pierre Philosophale et remporter la victoire. Bonne chance!
      </p>
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

.indice {
  text-decoration: none;
  cursor: text;
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

.goodBrick {
  position: fixed;
  top: 48vh;
  left: 52vw;
  font-size: 0.2rem;
  color: transparent;
}
</style>