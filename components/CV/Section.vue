<script setup lang="ts">
const props = defineProps({
  title: String
});
</script>

<template>
<section>
  <header>
    <span>{{ title }}</span>
  </header>

  <slot/>
</section>
</template>

<style scoped>
section {
  margin: 2rem 0;
}

section > header > span {
  font-weight: bold;
}
</style>
