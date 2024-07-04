<template>
  <div class="section-title" :class="alignment" data-aos-delay="150" data-aos="fade-up" data-aos-duration="800">
    <span class="pre-title" :class="preTitleClass" v-if="preTitle" v-html="preTitle"></span>
    <h2 class="title" v-html="title"></h2>
    <span class="shape-line" v-if="!disableMark"><i class="icon-19"></i></span>
    <p v-html="subTitle" v-if="subTitle"></p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  preTitle: String,
  preTitleClass: String,
  title: {
    type: String,
    required: true
  },
  subTitle: String,
  alignment: String,
  disableMark: Boolean
});
</script>

<style scoped>

</style>
