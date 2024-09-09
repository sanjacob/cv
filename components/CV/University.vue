<script setup lang="ts">
const props = defineProps({
  name: String,
  url: String,
  grade: String,
  award: String,
  start: String,
  end: String
});
</script>

<template>
<span class="name">{{ name }}</span>
<span class="dates">{{ start }} - {{ end }}</span>
</template>

<style scoped>

</style>
