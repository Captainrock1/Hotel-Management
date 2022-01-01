<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hello-world msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from './components/hello-world.vue'

export default defineComponent({
  components: {
    'hello-world': HelloWorld
  }
})

</script>

<style lang="scss">
#app {
  @apply text-center;
}
</style>
