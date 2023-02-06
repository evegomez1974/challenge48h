<template>
  <div class="hello">
    <h1>DANS LE COMISSARIAT DE POLICE D'YNOVILLE</h1>
    <p>
      Phasellus ut neque nec velit aliquet facilisis et et lorem. Fusce
      porttitor ac ipsum tincidunt euismod. Ut suscipit sem elit, quis placerat
      ex pellentesque vitae. Duis vitae imperdiet ipsum. Suspendisse at eleifend
      eros. Pellentesque convallis nisl eu augue tincidunt dignissim.
      <router-link  to="/Enigme2" class="test">ynov</router-link>
      ligula enim, blandit id viverra laoreet, accumsan et risus.
      Duis at finibus mi. Nullam scelerisque, ligula non tincidunt dapibus, orci
      nibh interdum neque, id aliquet nunc lorem ac diam. Etiam dictum sagittis
      lectus, quis rhoncus nulla. In et euismod tortor
    </p>
    <router-link  to="/"><button>Enigme 2 : Trouvez le dossier du 17/05/2050</button></router-link>
  </div>
</template>

<script>
export default {
  name: "PageEnigme1",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.test{
    color: #2c3e50;
    text-decoration: none;
    cursor: text;
}
</style>