<template>
  <div class="div_container">
    <nav>
      <div class="navFirstBlock"><p>Ynov challenge</p></div>
    </nav>

    <section>
      <div class="welcomeSentence">
        <div>
          <h3 class="font-color">Bonjour,</h3>
          <p class="font-color">
            Trois dossiers se trouvent devant toi, choisis la catégorie qui
            t'intéresses.
          </p>
        </div>
      </div>

      <div class="buttonsDiv ta-c padT150 padB150">
        <div class="card">
          <router-link to="/Cybersecurite"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Cybersécurité /<br />
              Infra
            </button></router-link
          >
        </div>

        <div class="card">
          <router-link to="/debut"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Algorithmes
            </button></router-link
          >
        </div>

        <div class="card">
          <router-link to="/Developpment"
            ><button class="button accept-btn" onclick="addAnimation2()">
              Developpement
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
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}
ul {
  list-style-type: none;
}

nav {
  background-color: rgb(179, 238, 232);

  display: flex;
  justify-content: center;
  /* justify-content: space-between; */
  align-items: center;
  color: black;
  font-weight: bold;
  font-size: 20px;
  padding: 0 5%;
  height: 50px;
  max-height: 50px;
}

section {
  height: 50vh;
  margin: 0 5%;
  margin-top: 3rem;
}
section div {
  font-size: 20px;
  width: 550px;
  margin: 0 auto;
}
.footer {
  background-color: lightgrey;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  bottom: 0;
}

.returnButton {
  margin-right: 100%;
  background-color: #23b1a5;
  height: 25px;
  width: 150px;
  color: white;
  font-weight: bold;
  text-align: left;
  padding-left: 2%;
}

.buttonsDiv {
  padding: 0;
  width: 100%;
  max-width: 100%;
  height: 40vh;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}
</style>

<style>
/* Animations des boutons, ne pas changer */
@keyframes slideMe {
  0% {
    transform: skewX(53deg) translateX(500px);
  }
  100% {
    transform: skew(0deg);
  }
}
@keyframes slideMeOut {
  0% {
    transform: skewX(-53deg) translateX(-500px);
  }
  100% {
    transform: skew(0deg);
  }
}
.hide {
  display: none;
}
.show {
  display: block !important;
}
.ta-r {
  text-align: right;
}
.ta-c {
  text-align: center;
}
.padT150 {
  padding-top: 150px;
}
.padB150 {
  padding-bottom: 150px;
}
.button {
  width: 250px;
  height: 150px;
  font-size: 18px;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}
.button.cancel-btn:hover {
  background-color: #f3270b;
  box-shadow: 0px 15px 20px rgba(243, 42, 11, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
.button.accept-btn:hover {
  background-color: #23b1a5;
  box-shadow: 0px 15px 20px #0000005e;
  color: #fff;
  transform: translateY(-7px);
}
.tester {
  font-size: 15px;
  animation: slideMe 1s ease-in;
}
.tester2 {
  font-size: 15px;
  animation: slideMeOut 1s ease-in;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 2s, opacity 1s linear;
}
.button a {
  font-size: 16px;
}
.btn-disabled {
  cursor: not-allowed;
  background-color: lightgray;
}
.btn-disabled:hover {
  color: black !important;
  background-color: lightgray !important;
  box-shadow: none !important;
  transform: none !important;
}

.font-color {
  color: black;
}

.div_container {
  height: 100vh;
}
/* Fin animation des boutons */
</style>
