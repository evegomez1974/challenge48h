<template>
  <div>
    <div class="returnButton">
      <router-link to="/"><span>⬅︎ Retour</span></router-link>
    </div>
    <nav>
      <div class="navFirstBlock"><p>Developpment</p></div>
    </nav>

    <section>
      <div class="welcomeSentence">
        <!-- <div>
          <h3>Bonjour Inspecteur</h3>
          <p>Trois dossiers se trouvent devant toi, choisis l'enquête qui t'intéresses.</p>
        </div> -->
      </div>

      <div class="buttonsDiv ta-c padT150 padB150">
        <div class="card">
          <router-link to="/EnigmeCastle"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Enigme du château
            </button></router-link
          >
        </div>

        <div class="card">
          <router-link to="/findmdp"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Enigme mot de passe 1
            </button></router-link
          >
        </div>

        <div class="card">
          <router-link to="/nativecode"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Enigme mot de passe 2
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
  name: "PageDeveloppment",
};
</script>
