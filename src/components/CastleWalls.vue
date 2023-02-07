<template>
  <div class="pitchHistoire">
    <div class="pitch">
      <h1>FELICITATION VOUS VOICI DANS L'ENIGME 2 DU CHALLENGE 48H D'YNOV AIX</h1>

      <p>
        Vous avez réussi à entrer dans le château du professeur ynofou, mais
        maintenant, le véritable défi commence. Vous devez résoudre les énigmes
        complexes et trouver la Pierre Philosophale cachée quelque part dans les
        murs du château avant que le temps ne s'écoule. Mais soyez sur vos
        gardes, car le professeur ynofou a installé des pièges mortels pour protéger
        sa découverte. Vous devrez être rapide, astucieux et travailler en
        équipe pour réussir dans cette mission palpitante. Le temps est compté,
        alors préparez-vous à relever le défi et à devenir le héros de
        l'histoire.
      </p>
    </div>

    <div class="goodBrick">
        La Pierre Philosophale se trouve en Salle des Trésors. A vous de trouver le chemin.
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
  background-image: url("../assets/castleWalls.jpg");
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