<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Accueil msg="Welcome to Your Vue.js App"/>
  <router-link to="/Accueil">Accueil</router-link>
  <router-link to="/BestPage">Oui</router-link>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  
  }
}
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
