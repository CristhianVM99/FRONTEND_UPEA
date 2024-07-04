<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderOne showHeaderTop="true" />

    <Banner />

    <Features />

    <Categories />

    <About />

    <Course />

    <FunFact />

    <TestimonialOne />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HeaderOne = defineAsyncComponent(() => import('@/components/header/HeaderOne.vue'))
const Banner = defineAsyncComponent(() => import('@/components/home-main/Banner.vue'))
const Features = defineAsyncComponent(() => import('@/components/home-main/Features.vue'))
const Categories = defineAsyncComponent(() => import('@/components/home-main/Categories.vue'))
const About = defineAsyncComponent(() => import('@/components/home-main/About.vue'))
const Course = defineAsyncComponent(() => import('@/components/home-main/Course.vue'))
const FunFact = defineAsyncComponent(() => import('@/components/home-main/FunFact.vue'))
const TestimonialOne = defineAsyncComponent(() => import('@/components/testimonial/TestimonialOne.vue'))
/*const ContactInfo = defineAsyncComponent(() => import('@/components/home-main/ContactInfo'))
const Instructor = defineAsyncComponent(() => import('@/components/home-main/Instructor'))
const CTAOne = defineAsyncComponent(() => import('@/components/cta/CTAOne'))
const LogoOne = defineAsyncComponent(() => import('@/components/logo/LogoOne'))
const Blog = defineAsyncComponent(() => import('@/components/home-main/Blog'))
const FooterTwo = defineAsyncComponent(() => import('@/components/footer/FooterTwo'))*/

// Esto es para definir el título de la página
//import { useHead } from '@vueuse/head'

/*useHead({
  title: 'EduBlink Education'
})*/
</script>
