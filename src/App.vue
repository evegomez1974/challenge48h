<template>
  <router-link to="/Accueil">Accueil</router-link>
  <hr />
  <router-link to="/BestPage">Best</router-link>
  <hr />
  <router-link to="/findmdp">Mot de passe</router-link>
  <router-view />
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
