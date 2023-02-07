<template>
  <div class="pitchHistoire">
    <div class="pitch">
      <h1>BIENVENU DANS L'ENIGME 1 DU CHALLENGE 48H D'YNOV AIX</h1>
      <p>
        Vous êtes invité à célébrer le 500ème anniversaire de la découverte de
        la Pierre Philosophale par le professeur ynofou. Cependant, à peine
        arrivé dans le château, vous vous retrouvez enfermé dans sa salle
        secrète. Vous découvrez alors que le professeur ynofou a caché la Pierre
        quelque part dans le
        <router-link to="/CastleWalls" class="indice">château</router-link> et a laissé une
        série d'énigmes complexes pour vous tester.
      </p>
      <p>
        Vous avez seulement 30 minutes pour résoudre les énigmes, trouver la
        Pierre et vous échapper avant qu'elle ne soit perdue à jamais dans les
        mains du professeur ynofou. Mais attention, le professeur ynofou est
        très protecteur envers sa découverte et a installé des pièges mortels
        dans le château pour empêcher toute intrusion.
      </p>

      <p>
        Vous devrez être rapide et astucieux pour éviter les pièges et trouver
        les indices qui vous mèneront à la Pierre Philosophale. Chaque seconde
        compte dans cette mission épique, alors êtes-vous prêt à relever le défi
        et à devenir le héros de l'histoire?"
      </p>
    </div>
    <router-link to="/"
      ><button class="buttonCastle">
        ENTREZ DANS LE CHATEAU !!
      </button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "CastleWalls",
};
</script>

<style scoped>
.pitchHistoire {
  height: 100vh;
  width: 100vw;
  background-image: url("../assets/castle.jpg");
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
</style>