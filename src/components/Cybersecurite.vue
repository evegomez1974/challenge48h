<template>
  <div>
    <div class="returnButton">
      <router-link to="/"><span>⬅︎ Retour</span></router-link>
    </div>
    <nav>
      <div class="navFirstBlock"><p>Cybersécurité</p></div>
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
          <router-link to="/cyberqcm1"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Quiz niveau débutant
            </button></router-link
          >
        </div>

        <div class="card">
          <router-link to="/cyberqcm2"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Quiz niveau intermédiaire
            </button></router-link
          >
        </div>

        <div class="card">
          <router-link to="/cyberqcm3"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Quiz niveau expert
            </button></router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PageCybersecurite",
};
</script>
