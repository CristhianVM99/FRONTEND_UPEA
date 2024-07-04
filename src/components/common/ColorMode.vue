<template>
  <button class="edublink-vue-light-dark-switcher" @click="toggleTheme">

      <span v-if="colorMode.value === 'dark'">
        <icon name="sun" />
      </span>
      <span v-else>
        <icon name="moon" />
      </span>


  </button>
</template>

<script setup>
import {useColorMode} from '@vueuse/core'
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.preference !== 'dark' ? 'dark' : 'light'
}
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>
