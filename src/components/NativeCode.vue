<template>
  <div class="container">
    <button @click="showDialog">Click here!</button>

    <p>admin</p>
    <p>e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855</p>
  </div>
</template>

<script>
import swal from "sweetalert";

import { SHA256 } from "crypto-js";

const password = process.env.MDP;

const hash = SHA256(password).toString();

console.log(hash);

export default {
  methods: {
    async showDialog() {
      const inputValue = await swal({
        title: "Escape from here !",
        text: "Please enter a correct password :",
        content: "input",
        icon: "info",
        buttons: true,
        dangerMode: true,
        closeModal: false,
      });

      if (inputValue === hash) {
        window.alert("Access granted! Good job!");
      } else {
        window.alert("Access denied. ^^ b");
        return false;
      }
    },
  },
};
</script>

<style>
.container {
  width: 100%;
  height: 100vh;
  background-color: #000;
}

button {
  margin: auto;
  margin-top: 200px;
  padding: 15px 40px;
  border: none;
  color: #000;
  box-shadow: 18px -18px 44px #939090, -18px 18px 44px #ffffff;
  font-family: monospace;
  font-weight: 800;
}

p {
  color: #000;

  margin-top: 200px;
}
</style>
