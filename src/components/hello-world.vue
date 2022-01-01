<template>
  <h1>{{ msg }}</h1>
  <h2>Hello and Welcome Developer!</h2>
  <p>Example template Vue 3 + TypeScript + ESLint Standard With TypeScript</p>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>+
    <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank">Vetur</a>
    or
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    (if using <code>&lt;script setup&gt;</code>)
  </p>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a>|
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a><br>
    <a href="https://buefy.org/" target="_blank">buefy</a>
  </p>
  <h3>count is: {{ count }}</h3>
  <button type="button" @click="increment">increment</button>
  <button type="button" @click="decrement" :disabled="isDisabled">decrement</button>
  <p>You Can Edit <code>components/hello-world.vue</code> to test hot module replacement.</p>
</template>
<script lang="ts" src="./count.ts"></script>

<style scoped>
a {
  color: #85e7bb;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
