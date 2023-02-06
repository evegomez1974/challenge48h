<template>
  <div>
    <nav>
      <div class="navFirstBlock"><p>Ynov challenge</p></div>

      <!-- <div class="navSecondBlock">
        <ul>
          <li><a href="#!">Challenges</a></li>
        </ul>
      </div> -->
    </nav>

    <section>

      <div class="welcomeSentence">
        <div>
          <h3>Bonjour Inspecteur</h3>
          <p>Trois dossiers se trouvent devant toi, choisis l'enquête qui t'intéresses.</p>
        </div>
      </div>
      
      <div class="buttonsDiv ta-c padT150 padB150">
        <div class="card">
        <button class="button accept-btn"  onclick="addAnimation2()"><a href="#!">Developpement</a></button>
      </div>
      
      <div class="card">
        <button class="button accept-btn"  onclick="addAnimation2()"><a href="#!">Infrastructure</a></button>
      </div>
      
      <div class="card">
        <button class="button accept-btn"  onclick="addAnimation2()"><a href="#!">Cybersécurité</a></button>
      </div>
    </div>
    
  </section>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a, a:visited, a:hover, a:active { color: inherit; text-decoration: none; }
  ul { list-style-type: none; }

  nav {
    background-color: rgb(179, 238, 232);

    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    align-items: center;
    color: black;
    font-weight: bold;
    font-size: 20px;
    padding: 0 20%;
    height: 50px;
    max-height: 50px;
  }

  section { margin: 0 5%; margin-top: 3rem; }
  section div { font-size: 20px; width: 550px; margin: 0 auto; }

  .buttonsDiv {
    padding: 0;
    width: 100%;
    max-width: 100%;
    height: 300px;
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
  @keyframes slideMe{
      0%{ transform: skewX(53deg) translateX(500px); }
      100%{ transform: skew(0deg); }
    }
    @keyframes slideMeOut{
      0%{ transform: skewX(-53deg) translateX(-500px); }
      100%{ transform: skew(0deg); }
    }
    .hide{ display: none; }
    .show{ display: block!important; }
    .ta-r{ text-align: right; }
    .ta-c{ text-align: center; }
    .padT150{ padding-top: 150px; }
    .padB150{ padding-bottom:150px; }
    .button {
      width: 250px;
      height: 150px;
      font-size: 11px;
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
      background-color: #F3270B;
      box-shadow: 0px 15px 20px rgba(243, 42, 11, 0.4);
      color: #fff;
      transform: translateY(-7px);
    }
    .button.accept-btn:hover {
      background-color: #23B1A5;
      box-shadow: 0px 15px 20px #0000005e;
      color: #fff;
      transform: translateY(-7px);
    }
    .tester{
      font-size: 15px;
      animation: slideMe 1s ease-in;
    }
    .tester2{
      font-size: 15px;
      animation: slideMeOut 1s ease-in;
      visibility: hidden;
      opacity: 0;
      transition: visibility 0s 2s, opacity 1s linear; 
    }
    .button a { font-size: 16px; }
  /* Fin animation des boutons */
</style>