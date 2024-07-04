<template>
  <div id="edu-search-popup" class="edu-search-popup">
    <div class="content-wrap">
      <div class="site-logo">
        <RouterLink to="/">
          <img class="logo-light" src="#" alt="Dark Logo" />
          <img class="logo-dark" src="#" alt="Light Logo" />
        </RouterLink>
      </div>
      <div class="close-button">
        <button class="close-trigger" @click="searchPopUpClose('removeClass', 'open')">
          <i class="icon-73"></i>
        </button>
      </div>
      <div class="inner">
        <form class="search-form" action="#">
          <input type="text" class="edublink-search-popup-field" placeholder="Search Here..." />
          <button class="submit-button">
            <i class="icon-2"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const searchPopUpClose = (triggerRemoveClass, className) => {
  const el = document.querySelector('#edu-search-popup')
  if (triggerRemoveClass === 'addClass') {
    el.classList.add(className)
  } else {
    el.classList.remove(className)
  }
}
</script>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>
