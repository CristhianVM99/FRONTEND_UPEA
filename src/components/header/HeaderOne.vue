<template>
  <header class="edu-header header-style-1 header-fullwidth no-topbar">
    <HeaderTopOne v-if="showHeaderTop" />
    <div class="header-mainmenu" :class="{'edu-sticky': isSticky}">
      <div class="container-fluid">
        <div class="header-navbar">
          <div class="header-brand">
            <div class="logo">
              <RouterLink to="/">
                <img
                    class="logo-light"
                    src="@/static/images/logo/logo-dark.png"
                    alt="Dark Logo"
                />
                <img
                    class="logo-dark"
                    src="@/static/images/logo/logo-white.png"
                    alt="Light Logo"
                    v-if="colorMode === 'dark'"
                />
              </RouterLink>
            </div>
            <Category />
          </div>
          <div class="header-mainnav">
            <nav class="mainmenu-nav">
              <Navigation />
            </nav>
          </div>
          <div class="header-right">
            <ul class="header-action">
              <li class="search-bar">
                <div class="input-group">
                  <input
                      type="text"
                      class="form-control"
                      placeholder="Search"
                  />
                  <button class="search-btn" type="button">
                    <i class="icon-2"></i>
                  </button>
                </div>
              </li>
              <li class="icon search-icon">
                <button
                    class="search-trigger"
                    @click="searchPopUpOpen('addClass', 'open')"
                >
                  <i class="icon-2"></i>
                </button>
              </li>
              <li class="icon light-dark-icon">
                <ColorMode />
              </li>
              <li class="header-btn">
                <RouterLink to="/contact-us" class="edu-btn btn-medium">
                  Try for free <i class="icon-4"></i>
                </RouterLink>
              </li>
              <li class="mobile-menu-bar d-block d-xl-none">
                <button
                    class="hamberger-button"
                    @click="mobileMenuOpen('addClass', 'active')"
                >
                  <i class="icon-54"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <SearchPopUp />
    <OffCanvasMobileMenuOne />
  </header>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useColorMode } from '@vueuse/core'

import HeaderTopOne from '@/components/header/HeaderTopOne.vue'
import Category from '@/components/header/Category.vue'
import Navigation from '@/components/header/Navigation.vue'
import SearchPopUp from '@/components/header/SearchPopUp.vue'
import ColorMode from '@/components/common/ColorMode.vue'
import OffCanvasMobileMenuOne from '@/components/header/OffCanvasMobileMenuOne.vue'

const isSticky = ref(false)
const showHeaderTop = ref(true) // Assuming showHeaderTop is a prop

const colorMode = useColorMode().value

const mobileMenuOpen = (addRemoveClass, className) => {
  const el = document.querySelector('#offcanvas-menu')
  if (addRemoveClass === 'addClass') {
    el.classList.add(className)
  } else {
    el.classList.remove(className)
  }
}

const searchPopUpOpen = (addRemoveClass, className) => {
  const el = document.querySelector('#edu-search-popup')
  if (addRemoveClass === 'addClass') {
    el.classList.add(className)
  } else {
    el.classList.remove(className)
  }
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY
    isSticky.value = scrollPos >= 200
  })
})
</script>
