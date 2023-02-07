<template>
  <div>
    <div class="returnButton">
      <router-link to="/"><span>⬅︎ Retour</span></router-link>
    </div>
    <nav>
      <div class="navFirstBlock"><p>Un problème d'algo</p></div>
    </nav>

    <section>
      <div class="welcomeSentence">
        <div>
          <h3 class="font-color">Attention</h3>
          <p class="font-color">
            Pour cette série de petits casse-têtes, il est conseillé de résoudre
            les énigmes grâce à des fonctions créées en JS.
          </p>
          <p class="font-color">
            Si tu as besoin d'un interpreteur en ligne,
            <a class="lienBeau" href="https://playcode.io/javascript"
              >CELUI-LA</a
            >
            est sympathique
          </p>
          <p class="font-color">
            Garde bien tes fonctions au chaud, elles peuvent resservir
          </p>
        </div>
      </div>

      <div class="buttonsDiv ta-c padT150 padB150">
        <div class="card">
          <router-link to="/aventure"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Commencer !
            </button></router-link
          >
        </div>
      </div>
    </section>
    <div class="footer">
      <span>Challenge 48h</span>
      <span>Réaliser par des étudiants d'Ynov</span>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PageDebutAventure",
};
</script>
  
  <style>
.lienBeau {
  font-size: 32px;
  color: darkred;
}
.lienBeau:hover {
  font-size: 32px;
  color: darkred;
}

.font-color {
  color: black;
}
</style>