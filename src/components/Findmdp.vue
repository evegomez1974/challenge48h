<template>
  <div class="container">
    <div class="left">
      <h1>Trouvez le bon identifiant et le bon mot de passe</h1>
    </div>

    <div class="right">
      <form @submit.prevent="valide">
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="username"
          placeholder="?????"
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="??????"
        />
        <button v-on:click="valide">Valider</button>
      </form>

      <div v-if="showMessageIncorrect">
        <p id="incorrect">Username and/or password are incorrect.</p>
      </div>

      <div v-if="showMessageCorrect">
        <p id="correct">SUCCESSED</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageFindmdp",

  data() {
    return {
      username: "",
      password: "",
      showMessageIncorrect: false,
      showMessageCorrect: false,
    };
  },
  methods: {
    valide() {
      const correctUsername = "admin";
      const correctPassword = "secret";
      if (
        this.username === correctUsername &&
        this.password === correctPassword
      ) {
        console.log("Username and password are correct!");
        this.showMessageCorrect = true;
      } else {
        console.log("Username and/or password are incorrect.");
        this.showMessageIncorrect = true;
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
}

.left {
  width: 30%;
  background-color: #000;
}

h1 {
  color: #fff;
  font-family: impact;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 20px;
}

.right {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../assets/images.png");
  object-fit: contain;
}

input[type="text"] {
  display: block;
  width: 90%;
  border: none;
  box-shadow: 0px 0px 10px 5px #ffffff;
}

input[type="password"] {
  display: block;
  width: 90%;
  border: none;
  box-shadow: 0px 0px 10px 5px #ffffff;
}

label {
  display: block;
  margin-top: 20px;
  margin-bottom: 10px;
  font-family: impact;
}

button {
  margin-top: 40px;
  border: none;
  padding: 8px 40px;
  background: #5dd45d;
  letter-spacing: 2px;
  color: #fff;
  border-radius: 14px;
  cursor: pointer;
  font-family: impact;
}

#incorrect {
  font-size: 14px;
  color: red;
}

#correct {
  font-size: 14px;
  color: green;
}

input::-webkit-input-placeholder {
  color: #d3d3d3;
}
</style>
