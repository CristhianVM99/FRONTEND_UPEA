<script setup >
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  }
});

// feel free to update this with an svg directory of your choice
const icon = defineAsyncComponent(() =>
    import(`@/static/images/light-dark/${props.name}.svg`),
);
</script>

<template>
  <component :is="icon" class="fill-current" />
</template>

<style scoped lang="scss">

</style>