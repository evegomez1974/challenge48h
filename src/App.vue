<script>

export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    },
    onInput(e) {
      this.text = e.target.value
    },
    toggle() {
      this.awesome = !this.awesome
    },

  }
}
</script>

<template>
  <h1>Make me red</h1>
  <button @click="increment">count is: {{ count }}</button>
  <input :value="text" @input="onInput" placeholder="Type here">
  <p>{{ text }}</p>
  <h1 v-if="awesome">Vue.js is awesome</h1>
  <h1 v-else>Oh no :'(</h1>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>

  <p ref="p">hello</p>
</template>

<style>
.title {
  color: red;
}
.done {
  text-decoration: line-through;
}
</style>
