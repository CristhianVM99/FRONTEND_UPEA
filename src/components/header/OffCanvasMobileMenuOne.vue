<template>
  <div id="offcanvas-menu" class="edublink-vue-mobile-popup-menu">
    <div class="mobile-menu-overlay" @click="mobileMenuClose('removeClass', 'active')"></div>
    <div class="inner">
      <div class="header-top">
        <div class="logo">
          <RouterLink to="/">
            <img class="logo-light" src="#" alt="Dark Logo" v-if="colorMode.value === 'light'">
            <img class="logo-dark" src="#" alt="Light Logo" v-if="colorMode.value === 'dark'">
          </RouterLink>
        </div>
        <div class="close-menu">
          <button class="close-button" @click="mobileMenuClose('removeClass', 'active')">
            <i class="icon-73"></i>
          </button>
        </div>
      </div>
      <MobileMenu />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useColorMode } from '@vueuse/core'
import { onMounted, onUnmounted } from 'vue'
import MobileMenu from '@/components/header/MobileMenu.vue'

const colorMode = useColorMode()
const offcanvasMenu = ref(null)

const mobileMenuClose = (triggerRemoveClass, className) => {
  if (triggerRemoveClass === 'addClass') {
    offcanvasMenu.value.classList.add(className)
  } else {
    offcanvasMenu.value.classList.remove(className)
  }
}

onMounted(() => {
  offcanvasMenu.value = document.querySelector('#offcanvas-menu')
})
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>
